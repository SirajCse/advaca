# advaca-vue — Full Vue 3 SPA (shadcn-vue) for the untouched Laravel backend

This is a **complete, fully-workable Vue 3 single-page application** for the
advaca (school & college management) Laravel backend. It replaces the
placeholder `resources/js` tree with **1,100+ real, hand-structured Vue
components and pages** built on the **shadcn-vue** design system.

**The Laravel files are NOT touched.** The SPA mounts through the existing
`resources/views/app.blade.php` contract:

- blade root element: `<div id="root">`
- vite entry: `@vite(['resources/js/app.js'])`
- api base: `/api` (Sanctum cookie auth + CSRF meta tag)

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

- `POST /api/auth/login` → session cookie (Sanctum) + optional device token.
- `GET /api/auth/user` boots the session (`stores/auth.js`).
- 401 responses clear the session and redirect to `/app/login`.
- 419 (CSRF expiry) reloads the page.

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
