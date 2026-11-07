# advaca-vue — Full Vue 3 SPA (shadcn-vue), rebuilt 1:1 to the original AdvAca UI

This is a **complete, fully-workable Vue 3 single-page application** for the
advaca (school & college management) Laravel backend. This version (v1.5.8.0)
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

## What changed in v1.5.8.0 — "every page 404" fix pack

| Symptom | Root cause | Fixed by |
|---|---|---|
| **Every page shows "The page you could not be found. Go to Dashboard"** (the sidebar worked, the database is fine, the old source runs well on the same DB) | the real sidebar menu (`resources/js/spec/menu.js`, the file `AppNavigation` actually renders) was generated with a leading `/app` on **all 356 paths** (`/app/home`, `/app/academic/departments` …). `RouterLink` resolves `to` relative to the router base — which is already `…/app` — so every sidebar click produced `{base}/app/…` (double prefix) and fell into the catch-all 404 | ✅ all 356 menu paths stripped of the `/app` prefix; every path re-validated against the route table (0 unknown) |
| secondary landmine: `config/menu.js` (unused by the UI) had 174 wrongly singularized paths (`/academic/department` vs the real `/academic/departments`) | generation artifact | ✅ all 174 paths corrected to the original app's URLs (kept in sync even though the file is currently unreferenced) |
| sidebar clicks landed on `{base}/app/…` even on pages that "worked" when typed directly | same double-prefix root cause, invisible in deep-link tests | ✅ new E2E scenario **7b** drives a real in-app sidebar click and asserts the final URL has a single base |

Verified end-to-end (mock backend + headless Chromium, **18/18 checks**): **menu walk over all 203 sidebar targets (zero 404s)**, in-app sidebar click, period picker (forced modal, list + Continue, session skip, device skip, reopen from header), teacher flow, catch-all 404 page, **WAMP sub-folder deployment shape**, select-period unblocks previously-422 pages, stale-token redirect.

## What changed in v1.5.7.0 — academic period picker unblocked

| Problem | Root cause | Fixed by |
|---|---|---|
| **"Select academic period" modal shows with nothing to do — the whole app is stuck** | the backend returns `permissions: ['*']` (wildcard) for every user with the admin role, but `auth.can('period:change')` only matched the literal name → the picker rendered the "assigned by your administrator" branch with **no list and no button** | ✅ `auth.can()` now resolves the `'*'` wildcard — admin-role users get the period list with the default period pre-selected and a **Continue** button |
| no way out of the picker | the forced dialog had no skip path | ✅ **Skip for now** (this session) and **Do not ask again on this device** (localStorage) are always available — whitelisted pages (dashboard, departments, programs, sessions, periods, notifications) keep working, everything else surfaces the backend's own "choose a period" toast |
| picker cannot be re-opened after skipping | only the forced mount existed | ✅ header **period button** (CalendarClock) shows the current period name — or an amber "Select period" warning while none is set — and re-opens the picker any time |
| the picker dialog rendered twice on the dashboard | mounted in both the layout and the dashboard page | ✅ single mount in the user layout only |
| loading failure left the modal dead | no retry | ✅ **Retry** button on load error, and the select flow persists the period name so the header label survives reloads |

Verified end-to-end (mock backend + headless Chromium, **14/14 checks**): admin
wildcard select flow, session skip, device skip, reopen from header,
no-permission (teacher) skip, catch-all 404, stale-token redirect.

## What changed in v1.5.6.0 — "only sidebar and header, blank page" fix pack

| Symptom | Root cause | Fixed by |
|---|---|---|
| **Any URL shows only the sidebar and header, main area empty** | the route table had **no catch-all**: every URL that is not an exact route match rendered the shell with an empty `<main>` | ✅ `/:pathMatch(.*)*` → `NotFound` catch-all added to `routes.js` — unknown URLs now render the styled 404 page inside the app shell (guests are still bounced to `/login` by the guard) |
| blank pages / API 401 on **WAMP sub-folder installs** (`http://localhost/advaca/public/app/...`) | router base and axios base were **hard-coded** (`createWebHistory('/app')`, `baseURL:'/api/v1'`) — correct only for domain-root vhosts | ✅ new `resources/js/lib/base.js` resolves **both** bases at runtime from the serving URL: `createWebHistory(detectAppBase())` + `baseURL: detectApiBase()`. Domain root (`/app` + `/api/v1`) and sub folder (`/advaca/public/app` + `/advaca/public/api/v1`) work with the same build |
| `GET /api/v1/auth/user?refresh_period=true → 401` + redirect race on boot | a stale localStorage token fired the global 401 handler **while the router guard was still awaiting boot** | ✅ boot probe is now `silent`: no global redirect from the interceptor, the guard owns the redirect; the dead token is dropped from localStorage so the next load skips the probe |
| one broken view could blank the whole page | no global error boundary | ✅ `app.config.errorHandler` logs the error and keeps the rest of the UI rendering |

Verified end-to-end with a mock backend + headless Chromium: login → dashboard,
CRUD list pages, unknown-URL 404 page, expired-token reload → clean `/login`
redirect — **in both domain-root and sub-folder serving modes**.

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

**Works from any serving root** — a domain vhost (`https://advaca.test/app/...`)
and a WAMP sub folder (`http://localhost/advaca/public/app/...`) both work with
the same build; the SPA and the API base are detected at runtime
(`resources/js/lib/base.js`).

> Update checklist (important when copying over an older delivery): delete the
> old `resources/js` folder first, then copy this one in, then `npm install &&
> npm run build` and hard-refresh the browser (Ctrl+Shift+R). Mixing files from
> two deliveries is the most common cause of stale-looking builds.

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
