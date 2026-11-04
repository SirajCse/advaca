# ============================================================
#  fix-bom.ps1  —  Strip UTF-8 BOM from all project files
#  Run in D:\wamp\www\advaca\
# ============================================================

 $ErrorActionPreference = 'Continue'
 $root = "D:\wamp\www\advaca"

# Collect every file Vite/Node might parse
 $paths = @(
    "$root\package.json",
    "$root\tsconfig.json",
    "$root\tsconfig.node.json",
    "$root\jsconfig.json",
    "$root\postcss.config.js",
    "$root\tailwind.config.js",
    "$root\vite.config.mjs",
    "$root\resources\js\app.js",
    "$root\resources\js\bootstrap.js",
    "$root\resources\js\router\index.js",
    "$root\resources\js\router\routes.js",
    "$root\resources\js\lib\utils.ts",
    "$root\resources\css\app.css"
)

# Add every .vue / .js / .ts / .json under resources/js
 $extra = Get-ChildItem -Path "$root\resources\js" -Recurse -Include *.vue,*.js,*.ts,*.json,*.css,*.mjs -ErrorAction SilentlyContinue
 $paths += $extra.FullName

 $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
 $count = 0
 $skipped = 0

foreach ($p in $paths) {
    if (-not $p -or -not (Test-Path $p)) { continue }
    try {
        $bytes = [System.IO.File]::ReadAllBytes($p)
        if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
            $text = $utf8NoBom.GetString($bytes, 3, $bytes.Length - 3)
            [System.IO.File]::WriteAllText($p, $text, $utf8NoBom)
            Write-Host "[OK] Stripped BOM: $p" -ForegroundColor Green
            $count++
        } else {
            $skipped++
        }
    } catch {
        Write-Host "[!] Skipped (locked): $p" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  Stripped BOM from $count files ($skipped already clean)" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Now run:  npm run dev" -ForegroundColor White
Write-Host ""