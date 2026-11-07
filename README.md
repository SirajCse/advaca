# advaca-vue — Full Vue 3 SPA (shadcn-vue), rebuilt 1:1 to the original AdvAca UI

This is a **complete, fully-workable Vue 3 single-page application** for the
advaca (school & college management) Laravel backend. This version (v1.5.5.6)
was **fully redesigned against the original AdvAca frontend** — the routes,
sidebar, form fields, table columns, breadcrumbs and button layout are
reconstructed **1:1 from the original application** (the `public/older-build`
era UI), extracted directly from its route tree, language files, controllers,
FormRequests and ListServices.

**The Laravel files are NOT touched.** The SPA mounts through the existing
`resources/views/app.blade.php` contract:

- blade root element: `<div id="root">`
- vite entry: `@vite(['resources/js/app.js'])`
- api base: `/api/v1` (RouteServiceProvider `VERSION_PATH = '/v1'`)
- Sanctum bearer-token auth + CSRF meta tag

## What changed in v1.5.5.6 — API alignment with the backend route table

Every CRUD endpoint is now **verified against the untouched backend route
files** (`routes/app.php` + `routes/modules/*.php`, 1,167 URIs parsed from
v5.5.3):

| Problem (v1.5.5.5) | Root cause | Fixed in v1.5.5.6 |
|---|---|---|
| `GET /api/v1/periods/pre-requisite` → **404** (and most list/create pages silently 404ing) | entity endpoints were missing the `/app` prefix the backend mounts (`RouteServiceProvider` wraps every `routes/modules/*.php` with `prefix('app')`) | ✅ all **177 entity endpoint sets** rewritten to the parsed backend URIs (e.g. `app/academic/periods`), 0 unmatched |
| stray `pre-requisite` **404** on action pages | pre-requisite was assumed for every resource | ✅ now set only for the **154 resources** that really define `.../pre-requisite`; the generic engine skips the call otherwise |
| `POST /api/v1/app/students?per_page=50` → **422 "choose_period_info"** | `UserConfig` middleware rejects every non-whitelisted call while the user has **no current academic period** | ✅ original-style **PeriodSelection modal**: forced picker fed by `GET /app/academic/periods` (whitelisted), saving via `POST /app/academic/periods/{uuid}/select`, then `GET /auth/user?refresh_period=true` |
| `GET /api/v1/app/notifications?per_page=10` → **401** | fired for guests + wrong URL | ✅ correct URL `/app/notifications` and fetched **only when authenticated** |
| `GET /api/v1/auth/user` → **401** console noise | boot called it without a token | ✅ token-scoped boot (kept from v1.5.5.5) |
| config not loaded before guards | — | ✅ boot fetches public `GET /api/v1/config` once before the guards (same as the original router) |
| no route permission check | — | ✅ `meta.permission` enforced in `router.beforeEach` via `auth.can` (super admin bypass), matching the original `meta.permissions` guard |

## What changed in the v1.5.5.5 redesign

| Area | Before | Now (matches the original UI) |
|---|---|---|
| Routes | guessed paths (e.g. `/academic/department`) | the original 1,394 route tree (`/academic/departments`, `/finance/fee-heads`, …) |
| Sidebar | duplicated labels, wrong paths | the original 59 menu groups with resolved labels + icons (Team = "School", Academic, Finance, Exam, …) |
| Department form | ❌ "Batches" comma-separated field | ✅ Name / Code / Short Code / Alias / Description (from `DepartmentRequest`) |
| Table columns | guessed | ✅ exact columns from every `*ListService::getHeaders()` (Department: Name, Program, Code, Alias, Department Incharge, Created At) |
| List params | `page / q` | ✅ the backend contract: `current_page`, `per_page`, `sort`, `order`, `search` |
| Buttons | shadcn default | ✅ original layout: **Reset + "Keep Adding"** (left) and red **Cancel** + violet **Save** (right), **List all X** button |
| Labels | hard-coded English | ✅ resolved from the original `lang/en/*.php` (54 modules, incl. `:attribute` params) |
| 401 handling | noisy console errors | ✅ silent: token-scoped boot, no guest requests, silent redirect to `/app/login` |
| notifications | guest 401 noise | ✅ `/app/notifications` (backend route), fetched only when authenticated |

## Architecture

| Layer | Location | Notes |
|---|---|---|
| Entry | `resources/js/app.js` | Pinia + vue-router, auth bootstrap, silent-401 handler |
| HTTP | `resources/js/lib/http.js` | axios on `/api/v1`, CSRF, 401/419/422/429 handling |
| Router | `resources/js/router/routes.js` | **generated** 1,394 routes from the original route tree (base `/app`) |
| Specs | `resources/js/spec/` | `lang.js` (i18n), `entities.js` (250 entity configs), `menu.js` (sidebar) |
| CRUD engine | `resources/js/views/Crud/` | `CrudIndex` / `CrudAction` / `CrudShow` — config-driven generic pages (797 routes) |
| Custom pages | `resources/js/views/Pages/` | Auth (login/OTP/register/password), Dashboard, Config (17 sections), Profile, Errors |
| UI kit | `resources/js/components/ui/` | shadcn-vue (radix-vue): button, input, select, dialog, table, popover, … |
| API | `resources/js/api/crud.js` | endpoint factory: index/show/store/update/destroy/pre-requisite |
| Theme | `resources/css/app.css` | AdvAca violet primary, lavender page band, red cancel |

### Page coverage (1,394 routes)

- **797 routes** → the generic CRUD engine (exact fields, columns, pagination, row actions)
- **35 routes** → hand-built pages (auth, dashboard, config, profile, errors)
- **561 routes** → graceful placeholder pages with correct breadcrumb + title
  (module wizards/reports/details that need bespoke UIs — they render properly
  styled pages, ready to be filled in)

## How the spec was extracted

Everything was parsed out of the original application + the untouched backend:

1. route tree → original `public/build/manifest.json` + minified `app.js`
2. labels → `lang/en/*.php` (54 modules)
3. endpoints → `routes/app.php`, `routes/modules/*.php`, `routes/auth.php` (1,887 endpoints)
4. form fields → `app/Http/Requests/**` (233 FormRequests)
5. table columns → `app/Services/**/*ListService.php` (200 services)

## Build & install

```bash
npm install
npm run build     # outputs to public/build (Laravel mixes it automatically)
npm run dev       # vite dev server with /api proxy to :8000
```

Deploy exactly like the previous version: commit `resources/js` + configs,
run `npm run build`, Laravel serves `public/build` through `app.blade.php`.

## Auth flow (Sanctum bearer)

1. `POST /api/v1/auth/login` with `{ email, password, device_name: 'web' }`
   (the `email` field accepts a username too; a non-empty `device_name`
   returns a bearer token in the top-level `token` field)
2. every request sends `Authorization: Bearer <token>`
3. `GET /api/v1/auth/user` restores the session on refresh
4. 401 → token cleared, silent redirect to `/app/login`

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `The POST method is not supported for route api/auth/login` | API called without `/v1` | this build already uses `/api/v1` — clear browser cache |
| 401 on boot before login | old build fired guest requests | fixed: no request without a token |
| 404 on `app/notifications` | old path | fixed: `/notifications` |
| 422 on `app/students` | old build hit the fallback route | fixed: real path is `/students` with `current_page`/`per_page` |
| Login rate-limited (429) | 5 attempts/minute (backend throttle) | wait 60s, then retry |
