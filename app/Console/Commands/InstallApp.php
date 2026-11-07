<?php

namespace App\Console\Commands;

use App\Helpers\SysHelper;
use Illuminate\Console\Command;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Mint\Service\Actions\Install;
use Throwable;

class InstallApp extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 *
	 * php artisan app:install `--name="Admin" --username=admin --email=admin@gmail.com --password="admin123" --db-host=127.0.0.1 --db-port=3306 --db-name=mint_db --db-user=root --db-pass="" --access-code=13272 --force
	 *
	 * @var string
	 */
	protected $signature = 'app:install
        {--name=Admin                       : Admin user name}
        {--username=admin                   : Admin username}
        {--email=admin@gmail.com          : Admin email address}
        {--password=                        : Admin password (prompted if empty)}
        {--db-host=127.0.0.1                : Database host}
        {--db-port=3306                     : Database port}
        {--db-name=                         : Database name (required)}
        {--db-user=root                     : Database user}
        {--db-pass=                         : Database password (prompted if empty)}
        {--access-code=13272                : License access code}
        {--registered-email=                : Registered email (defaults to --email)}
        {--skip-symlink=no                  : Skip storage:link (yes|no)}
        {--db-imported                      : Skip migrations (DB already has schema)}
        {--force                            : Skip interactive confirmations}
        {--dry-run                          : Validate everything, then exit without installing}';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Run the one-shot installer pipeline non-interactively.';

	/**
	 * Execute the console command.
	 */
	public function handle(): int
	{
		$this->newLine();
		$this->info('┌──────────────────────────────────────────────┐');
		$this->info('│           Application Installer              │');
		$this->info('└──────────────────────────────────────────────┘');
		$this->newLine();

		try {
			$params = $this->collectParams();
			$this->validateParams($params);

			if ($this->option('dry-run')) {
				$this->info('✅ Dry run passed. All checks OK. Nothing was installed.');
				return self::SUCCESS;
			}

			if (!$this->option('force') && !$this->confirmInstall($params)) {
				$this->warn('Installation cancelled by user.');
				return self::SUCCESS;
			}

			$this->applyServerShims();
			$this->bindRequest($params);
			$this->runPipeline($params);

			$this->printSummary();
			return self::SUCCESS;
		} catch (Throwable $e) {
			$this->newLine();
			$this->error('❌ Install failed.');
			$this->error('   ' . $e->getMessage());
			$this->line('   at ' . $e->getFile() . ':' . $e->getLine());
			$this->line('');
			$this->line('   Trace (last 5 frames):');

			collect($e->getTrace())->take(5)->each(function ($frame, $i) {
				$file = $frame['file'] ?? '[internal]';
				$line = $frame['line'] ?? '?';
				$func = ($frame['class'] ?? '') . ($frame['type'] ?? '') . ($frame['function'] ?? '');
				$this->line("     #{$i} {$func} — {$file}:{$line}");
			});

			return self::FAILURE;
		}
	}

	/* =============================================================
	 |  Parameter collection
	 ============================================================= */

	/**
	 * Collect parameters from options, prompting for sensitive/missing ones.
	 */
	protected function collectParams(): array
	{
		$password = $this->option('password') ?: $this->secret('Admin password (min 8 chars)');
		$dbPass   = $this->option('db-pass');

		if ($dbPass === null) {
			$dbPass = $this->secret('Database password (leave blank for none)') ?: '';
		}

		$dbName = $this->option('db-name');
		if (empty($dbName)) {
			$dbName = $this->ask('Database name', 'mint_db');
		}

		$email = $this->option('email');
		$registered = $this->option('registered-email') ?: $email;

		return [
			'name'             => $this->option('name'),
			'username'         => $this->option('username'),
			'email'            => $email,
			'password'         => $password,
			'db_host'          => $this->option('db-host'),
			'db_port'          => (string) $this->option('db-port'),
			'db_name'          => $dbName,
			'db_username'      => $this->option('db-user'),
			'db_password'      => $dbPass,
			'access_code'      => $this->option('access-code'),
			'registered_email' => $registered,
			'skip_symlink'     => $this->option('skip-symlink'),
			'db_imported'      => (bool) $this->option('db-imported'),
		];
	}

	/* =============================================================
	 |  Pre-flight validation
	 ============================================================= */

	/**
	 * Validate params + environment before touching anything.
	 */
	protected function validateParams(array $p): void
	{
		$this->line('▶ Pre-flight checks');

		// --- APP_ENV must not be testing (SetENV bails otherwise) ---
		if (env('APP_ENV') === 'testing') {
			throw new \RuntimeException(
				"APP_ENV is 'testing' — SetENV action will be skipped. Set APP_ENV=local in .env first."
			);
		}
		$this->check('APP_ENV is not testing');

		// --- .env writable (SetENV + SetAppInstallation write to it) ---
		$envPath = base_path('.env');
		if (!File::exists($envPath)) {
			throw new \RuntimeException(".env file not found at {$envPath}");
		}
		if (!is_writable($envPath)) {
			throw new \RuntimeException(".env is not writable. chmod u+w {$envPath}");
		}
		$this->check('.env is writable');

		// --- storage/ + bootstrap/cache writable ---
		foreach ([storage_path(), base_path('bootstrap/cache')] as $path) {
			if (!is_writable($path)) {
				throw new \RuntimeException("Directory not writable: {$path}");
			}
		}
		$this->check('storage/ and bootstrap/cache are writable');

		// --- Required params ---
		$required = ['name', 'username', 'email', 'password', 'db_host', 'db_port', 'db_name', 'db_username'];
		foreach ($required as $key) {
			if (empty($p[$key])) {
				throw new \RuntimeException("Missing required parameter: --{$key}");
			}
		}
		$this->check('Required parameters present');

		// --- Email format ---
		if (!filter_var($p['email'], FILTER_VALIDATE_EMAIL)) {
			throw new \RuntimeException("Invalid email: {$p['email']}");
		}
		$this->check('Email format valid');

		// --- Password strength ---
		if (strlen($p['password']) < 8) {
			throw new \RuntimeException('Admin password must be at least 8 characters.');
		}
		$this->check('Password length >= 8');

		// --- Idempotency guard: refuse to run if already installed ---
		if (SysHelper::getApp('INSTALLED')) {
			if (!$this->option('force')) {
				throw new \RuntimeException(
					'Application already installed (INSTALLED is set). Use --force to override, or migrate:fresh first.'
				);
			}
			$this->warn('⚠  --force given: overriding existing installation.');
		} else {
			$this->check('Not previously installed');
		}

		// --- DB reachable + database exists ---
		$this->checkDatabase($p);

		$this->newLine();
	}

	/**
	 * Connect to MySQL and verify the target database exists.
	 */
	protected function checkDatabase(array $p): void
	{
		$dsn = sprintf('mysql:host=%s;port=%s', $p['db_host'], $p['db_port']);

		try {
			$pdo = new \PDO($dsn, $p['db_username'], $p['db_password'], [
				\PDO::ATTR_TIMEOUT => 5,
				\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
			]);
		} catch (\PDOException $e) {
			throw new \RuntimeException(
				"Cannot connect to MySQL at {$p['db_host']}:{$p['db_port']}: " . $e->getMessage()
			);
		}

		$stmt = $pdo->prepare('SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?');
		$stmt->execute([$p['db_name']]);

		if (!$stmt->fetch()) {
			throw new \RuntimeException(
				"Database '{$p['db_name']}' does not exist. Create it first:\n" .
				"  mysql -h{$p['db_host']} -P{$p['db_port']} -u{$p['db_username']} -p -e \"CREATE DATABASE {$p['db_name']} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\""
			);
		}

		$this->check("Database '{$p['db_name']}' exists and is reachable");
	}

	/* =============================================================
	 |  Confirmation
	 ============================================================= */

	protected function confirmInstall(array $p): bool
	{
		$this->newLine();
		$this->line('▶ Install summary');
		$this->table(
			['Setting', 'Value'],
			[
				['Admin name',     $p['name']],
				['Admin username', $p['username']],
				['Admin email',    $p['email']],
				['DB host',        $p['db_host'] . ':' . $p['db_port']],
				['DB name',        $p['db_name']],
				['DB user',        $p['db_username']],
				['DB imported',    $p['db_imported'] ? 'yes (skip migrate)' : 'no'],
				['Skip symlink',   $p['skip_symlink']],
				['Access code',    $p['access_code']],
			]
		);

		return $this->confirm('Proceed with installation?', true);
	}

	/* =============================================================
	 |  CLI shims + request binding
	 ============================================================= */

	/**
	 * SetENV reads $_SERVER['HTTP_HOST'] etc., which don't exist in CLI.
	 */
	protected function applyServerShims(): void
	{
		$_SERVER['HTTP_HOST']   = $_SERVER['HTTP_HOST']   ?? 'localhost';
		$_SERVER['SERVER_PORT'] = $_SERVER['SERVER_PORT'] ?? 80;
		$_SERVER['HTTPS']       = $_SERVER['HTTPS']       ?? 'off';
	}

	/**
	 * Bind a real Request so request()->all() inside the pipeline works.
	 */
	protected function bindRequest(array $params): void
	{
		app()->instance('request', Request::create('/', 'POST', $params));
	}

	/* =============================================================
	 |  Pipeline execution
	 ============================================================= */

	protected function runPipeline(array $params): void
	{
		$this->newLine();
		$this->line('▶ Running installer pipeline');
		$this->newLine();

		$steps = [
			'ValidateLicense', 'SetENV', 'Migrate', 'SeedTeam',
			'SeedRoleAndPermission', 'SeedConfig', 'SeedUser',
			'Setup', 'GenerateSymlink', 'SetAppInstallation',
		];

		$bar = $this->output->createProgressBar(count($steps) + 1);
		$bar->setFormat(' %current%/%max% [%bar%] %message%');
		$bar->setMessage('Starting…');
		$bar->start();

		// We can't hook into Pipeline's internals cleanly, so we wrap
		// each action class with a proxy that ticks the progress bar.
		$this->runInstrumented($steps, $params, $bar);

		$bar->setMessage('Done.');
		$bar->finish();
		$this->newLine(2);
	}

	/**
	 * Run the pipeline by instantiating each action manually so we can
	 * advance the progress bar and log each step. This mirrors exactly
	 * what Install::execute() does via Illuminate\Pipeline\Pipeline.
	 */
	protected function runInstrumented(array $steps, array $params, $bar): void
	{
		$payload = $params;

		foreach ($steps as $step) {
			$bar->setMessage($step . '…');

			$class = "Mint\\Service\\Actions\\{$step}";
			if (!class_exists($class)) {
				throw new \RuntimeException("Missing action class: {$class}");
			}

			$instance = app($class);

			// Actions use either handle($params, Closure) or execute().
			if (method_exists($instance, 'handle')) {
				$payload = $instance->handle($payload, fn ($p) => $p);
			} elseif (method_exists($instance, 'execute')) {
				$instance->execute($payload);
			}

			$bar->advance();
		}
	}

	/* =============================================================
	 |  Output helpers
	 ============================================================= */

	protected function check(string $label): void
	{
		$this->line('  <fg=green>✓</> ' . $label);
	}

	protected function printSummary(): void
	{
		$this->newLine();
		$this->info('┌──────────────────────────────────────────────┐');
		$this->info('│           Installation Complete              │');
		$this->info('└──────────────────────────────────────────────┘');
		$this->newLine();

		$this->table(
			['Item', 'Value'],
			[
				['INSTALLED checksum', SysHelper::getApp('INSTALLED') ?: '(not set)'],
				['Teams',              \App\Models\Team::count()],
				['Users',              \App\Models\User::count()],
				['Roles',              \Spatie\Permission\Models\Role::count()],
				['Admin role exists',  \Spatie\Permission\Models\Role::where('name', 'admin')->exists() ? 'yes' : 'no'],
				['Storage symlink',    File::exists(public_path('storage')) ? 'yes' : 'no'],
			]
		);

		$this->newLine();
		$this->line('  Next steps:');
		$this->line('    1. Review .env (DB creds, APP_URL, SESSION_DOMAIN).');
		$this->line('    2. php artisan config:clear');
		$this->line('    3. Log in as the admin user you just created.');
		$this->newLine();
	}
}