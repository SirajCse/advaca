# advaca-vue — Full Vue 3 SPA (shadcn-vue) for the untouched Laravel backend

This is a **complete, fully-workable Vue 3 single-page application** for the
advaca (school & college management) Laravel backend. It replaces the
placeholder `resources/js` tree with **1,100+ real, hand-structured Vue
components and pages** built on the **shadcn-vue** design system.

**The Laravel files are NOT touched.** The SPA mounts through the existing
`resources/views/app.blade.php` contract:

- blade root element: `<div id="root">`
- vite entry: `@vite(['resources/js/app.js'])`
- api base: `/api/v1` (RouteServiceProvider `VERSION_PATH = '/v1'`; every
  endpoint lives under `/api/v1/...`, e.g. `POST /api/v1/auth/login`)
- Sanctum bearer-token auth + CSRF meta tag

## What is inside

| Layer | Location | Notes |
|---|---|---|
| Entry | `resources/js/app.js` | Pinia + vue-router + vue-i18n + apexcharts, auth bootstrap |
| HTTP | `resources/js/lib/http.js` | axios instance on `/api`, CSRF, 401/419/422 handling, toasts |
| Router | `resources/js/router/` | `createWebHistory('/app')`, auth guard, generated route table |
| Stores | `resources/js/stores/` | auth (user/permissions), config, theme |
| API modules | `resources/js/api/*.js` | one file per backend module, generated from `routes/modules/*.php` |
| UI kit | `resources/js/components/ui/` | shadcn-vue components (radix-vue): button, input, select, dialog, table, ... |
| Shared | `resources/js/views/Components/` | DataTable (search/sort/paginate), PageHeader, FormAction, form fields, layout chrome |
| Layouts | `resources/js/views/Layouts/` | App (resolver), User shell, Guest, Blank, Empty, Error, Setup |
| Pages | `resources/js/views/Pages/` | **all 812 pages**, regenerated with real API wiring |
| Menu | `resources/js/config/menu.js` | sidebar tree generated from the route table |

Pages are generated from the actual Laravel code:

- **Index.vue** pages call the real `index` endpoint with `page / per_page / q / sort / order`
  and render the columns parsed from each `*Resource.php`.
- **Action.vue** pages render the fields parsed from each `*FormRequest.php`
  (text / number / date / textarea / switch / select / relation selects fed by the
  `pre-requisite` endpoint), support create **and** edit (loads the record via `show`),
  display server-side validation errors per field and toast success messages.
- **Show.vue** pages load the record by uuid and render a detail card with edit/delete.
- **Config module pages** render the real config keys from `resources/var/config.json`
  and save via `POST /api/app/config`.
- Auth, dashboard, profile, chat, attendance assistant, bulk-upload, notification and
  support pages are hand-written full implementations.

## Install & run

```bash
# 1) drop this folder over your advaca checkout (or copy resources/ + config files)
npm install

# 2) development - vite dev server with HMR, proxies /api to your backend
php artisan serve            # backend on :8000
npm run dev                  # frontend on :5173

# 3) production - regenerates public/build consumed by the existing blade view
npm run build
```

No Laravel file needs to change: `app.blade.php` already loads
`resources/js/app.js` via `@vite` and mounts `#root`.

### Auth flow

- `POST /api/v1/auth/login` with payload `{ email, password, remember_me, device_name: 'web' }`.
  - **Base path matters**: the backend registers every API route under
    `/api/v1` (`RouteServiceProvider::VERSION_PATH = '/v1'`). Calling
    `/api/auth/login` (without `/v1`) makes Laravel answer
    *"The POST method is not supported for route api/auth/login. Supported
    methods: GET, HEAD."* — the axios base is therefore `/api/v1`.
  - The backend `LoginRequest` requires the **`email`** field — it accepts a
    **username or an email address** in it (`getCredentials()` in
    `app/Actions/Auth/Login.php` detects which one it is).
  - A non-empty `device_name` makes the backend return a **Sanctum bearer
    token**, so the SPA works on any deployment without session/CSRF
    configuration.
- The token is stored in `localStorage` (`advaca-token`) and re-applied to the
  axios `Authorization` header on every page load (`stores/auth.js`), so
  refreshing the page keeps you signed in.
- `GET /api/v1/auth/user` (Bearer token) hydrates the user (`stores/auth.js`).
- 401 responses clear the token and redirect to `/app/login`.
- 419 (CSRF expiry) reloads the page; 429 (login throttle, 5/min) shows the
  backend's "too many attempts" message.

### Login troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| "The POST method is not supported for route api/auth/login" | API called without the `/v1` prefix (fixed in this version) | Use this version's `lib/http.js` (`baseURL: '/api/v1'`) |
| "Invalid credentials. Please try again." with correct credentials | Frontend sent `username` field but backend requires `email` (fixed in this version) | Use this version's `Login.vue` |
| Logged in but bounced back to `/app/login` after refresh | Token not restored on boot (fixed in this version) | Use this version's `stores/auth.js` |
| "Too many attempts" | Login is throttled to 5/min (`RouteServiceProvider`) | Wait 1 minute |
| "These credentials do not match our records." | Wrong password for that username/email | Reset the password (`/app/password/reset`) |

## Regenerating

The generator scripts live in `scripts/vuegen/` in the source workspace:
`analyze_advaca.py` parses the Laravel backend (routes, controllers, form
requests, resources) into `model.json`, and the `vuegen` package emits the
full tree. Re-run them any time the backend changes.

## Notes

- The route table is served under the `/app` base path (matching the blade
  catch-all route `Route::get('/app/{vue?}', ...)`) — URLs look like
  `/app/dashboard`, `/app/academic/batch`.
- Two-factor security / screen lock middleware is respected by the backend;
  the SPA handles the standard login flow and shows OTP pages when enabled.
- Reports that were blade-only (`routes/report.php` view routes) are not part
  of the SPA; everything under `/api/app/*` is wired.
