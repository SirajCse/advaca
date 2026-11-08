# advaca-vue — Full Vue 3 SPA (shadcn-vue), rebuilt 1:1 to the original AdvAca UI

This is a **complete, fully-workable Vue 3 single-page application** for the
advaca (school & college management) Laravel backend. This version (v1.5.14.0)
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

## What changed in v1.5.14.0 — the big registration/profile parity release (fieldset forms + full profile menu)

You sent four screenshots comparing the two apps side by side. Both gaps you flagged are now
closed, and the fix is **architectural**, not a one-off patch:

### 1. Add Registration — the 3-fieldset form (was: a flat field list)

The old app renders **three boxed sections** with conditional fields and a row repeater:

| Section (old app) | Fields (exact order) | Behaviour reproduced |
|---|---|---|
| **Registration** | Select Period -> Select Course (async search) -> Select Enrollment Type -> Date of Registration -> *(edit only)* Registration Fee (currency) + Payment Due Date | period change **clears the course** (create mode); under the course an info line shows the registration-fee hint or the disabled warning; fee + due date exist **only on edit** (mode==edit), exactly like the old page |
| **Student** *(create only)* | radio **New Student / Existing Student** (preselected: New) -> existing: async student search (name - code (phone)); new: Student Name (First/Middle/Third/Last), Gender radio, Birth Date, Contact Number | radio toggles swap the sub-fields live, same as the old BaseRadioGroup gate |
| **Guardian** *(create only, repeatable)* | per-row radio **New Guardian / Existing Guardian** (preselected: New) -> existing: async guardian search (name (phone)); new: Guardian Name (with remove icon), Contact Number, Relation | **starts with 1 row**, **Add Guardian** appends (bottom-right), remove asks for confirm; payload = the guardians[] array the backend RegistrationRequest validates |

After a successful create the app routes to the **registration wizard** (:uuid/wizard) —
the old post-submit target. Every select is fed by the module pre-requisite
(app/student/registrations/pre-requisite -> genders, studentTypes, enrollmentTypes,
guardianTypes, relations, periods, customFields) — **enrollment type can no longer show
"No options available"**.

### 2. Profile menu — the full old dropdown (was: Profile / Change Password / Logout)

Rebuilt 1:1 from the old ProfileDropdown chunk (permission guards included):
**Welcome {name}!** header (greeting + email + team) -> **Config** / **Choose Dark/Light Mode**
(toggles theme, icon follows state) / **Organization** / **Role & Permission** -> **Report**
(/reports) / **Device** / **Attendance QR Code** / **Profile** / **User Preference** /
**Change Password** -> **Failed Login Attempt** / **Clear Cache** (new tab, /cmd/clear-cache) /
**Download Format** (/download/formats) -> **Logout**. Every target route already existed in
this SPA — they are wired now.

### 3. This is now the default for ALL 173 extracted forms — not just registration

The old production bundle's **176 compiled Action views were mechanically parsed**
(scripts/extract_old_forms.js + scripts/gen_form_layouts.mjs): every fieldset legend,
field type, option source, label key (+ :attribute), condition (student_type==existing),
repeat group and async search action -> **resources/js/spec/form-layouts.js** with
**173 entities / ~1,334 fields**. CrudAction.vue now renders layouts: boxed fieldsets,
radio groups, name-input, async search selects (old search-action endpoints mapped to the
real v5.5.3 API: student/summary, guardian/list, academic/course/list, ...), date/time,
currency inputs, repeat rows, conditions and edit-only fields. Entities without an extracted
layout keep the previous flat renderer. Edit backfill mirrors the old set-form unwrapping
(period/course -> uuid, date/fee -> .value).

**Verified end-to-end** (mock backend replicating the real contracts + headless Chromium,
26 assertions green, zero console errors, zero 4xx/5xx): registration create renders all three
fieldsets with New Student/New Guardian preselected -> submit -> wizard route -> registration
edit backfills period/enrollment/date/fee **and the guardian row** (Jane Doe / mother) ->
profile menu shows all 15 old items -> departments edit backfill (standing check) ->
config/pre-requisite still never requested without type.

## What changed in v1.5.13.0 — full live audit against the running old app (advacaold.bdi.bd) + Class-Timing repeater

> **Every route was crawled live** on the unrestricted old-version install you provided
> (`https://advacaold.bdi.bd/app`, logged in as admin): **125 pages** — every Academic module
> list + create form, Students, Users, Teams, all 18 Config pages, Blogs/News/Form/Gallery/Task,
> Communication, Finance, Exam, Employee, Library, Hostel, Transport, Inventory, Asset, Mess,
> Calendar, Reception, Helpdesk. Form fields, toggles, table columns and heading titles were
> extracted page by page and diffed against this SPA's specs.

**Result: full parity.** Every old page exists here with the same heading and the same field
set, plus these three gaps the crawl exposed (now fixed):

| Found on the live old app | Old app behaviour (measured) | Fix in this release |
|---|---|---|
| **Add Class Timing** | "Session Name" + a **row repeater** (`sessions.0.isBreak`, `sessions.1.…`) — each row has Name, Code, **Is Break** toggle, Start Time, End Time; backend `ClassTimingRequest` validates `sessions.*.name/code/is_break/start_time(H:i:s)/end_time` | new **`repeat` field type** in `FormField.vue`: add/remove rows, per-row text/time/checkbox inputs; edit backfills rows from `ClassTimingSessionResource` (Cal time objects unwrapped to `H:i:s`); submits the exact `sessions[]` array the untouched backend validates |
| **Add/Edit Course** | **Division is a dropdown** fed by the course pre-requisite (`{divisions}`) | `Course.division` field `text → select` (module pre-requisite + cross-module `divisions?all=true` fallback) |
| **Add/Edit Batch** | **Course is a dropdown** fed by the batch pre-requisite (`{courses}`) | `Batch.course` field `text → select` (module pre-requisite + `courses?all=true` fallback) |

**Also confirmed live (already matched, no change needed):** the **Keep Adding** checkbox on
every create form (Reset + Keep Adding left · Cancel + Save right), Period create/edit field
order (Session, Name, Code, Short Code, Alias, Start/End Date, Enable Registration, Description),
Department/Session/Subject/Program-Type field sets, the alias redirects
(`/academic/timetable → /academic/timetables`, `/post → /posts`, `/task → /tasks?view=board`,
`/exam/exams → /exams`, `/config → /config/general`), and the route-level 404s of the old app
(`/role`, `/permission`, `/user-permission`, `/employee/employees` → its own 404 page) are
replicated 1:1.

**Verified end-to-end** (mock backend + headless Chromium, zero console errors): login → period
gate → **Edit Class Timing renders 2 backfilled repeater rows** (`First/1st 09:00:00–10:00:00`,
`Break/B` with Is Break checked) → **Edit Course shows `Division A` preselected** in the division
select → **Edit Batch shows `Course A` preselected** in the course select → config pre-requisite
never requested without `type` (still 500-guarded).

## What changed in v1.5.12.0 — the `config/pre-requisite` HTTP 500 fix (root-caused against the untouched backend)

**Your console error `GET /api/v1/config/pre-requisite → 500` is now explained and fixed.**
Root cause found in the untouched v5.5.3 backend code:

- `routes/api.php` line 25 serves the global pre-requisite at `/api/v1/config/pre-requisite`.
- `ConfigService::getPreRequisite()` (app/Services/Config/ConfigService.php line 19) starts with
  `$types = snake_case($request->type);` — `snake_case` (via laravel/helpers → `Str::snake(string)`) is
  **not nullable**: when the request has **no `type` query param**, PHP 8.3 throws
  `TypeError: Str::snake(): Argument #1 ($value) must be of type string, null given` → **HTTP 500**.
- The reconstructed generic CRUD form (`CrudAction.vue`) was the one caller that fetched this
  endpoint **without a `type` param** — every time a create/edit form opened, the console got a 500.

| Fix | Detail |
|---|---|
| The param-less call is **removed** from `CrudAction.vue` | the global config pre-requisite only serves `list.json` items (date formats, currencies, …) — it never contained module option lists (sessions/periods/departments), so CRUD selects were always filled by the **module pre-requisite** (`/app/academic/periods/pre-requisite` → `{sessions, seeder}`) plus the cross-module fallback. Same call pattern as the original frontend. |
| The mock backend now **reproduces the 500** | `scripts/smoke_server.js` returns HTTP 500 for a param-less `config/pre-requisite`, so a regression can never pass the smoke test again |
| API layer guarded | `api/core.js configPreRequisite()` and `api/config.js getConfigPreRequisite()` now carry a DANGER docblock: always pass `params.type` |

**Route audit (old vs new, full table):** the original production bundle (`public/build` of your
advacaold repo — the exact code that powers demo.instikit.com) exposes **1165 route names**;
the SPA exposes **1394** and covers **100% of the old table** — the only 5 unmatched names are the
old app's abstract layout aliases (`Blank`, `Empty`, `Error`, `Guest`, `Setup`), not pages; the
234 "extra" names are the explicit redirect/list aliases of the same URLs.

**Verified end-to-end** (mock backend that now 500s on param-less calls + headless Chromium,
zero console errors, zero 5xx/4xx): login → period gate shows **Skip for now** → select 2025-26 →
full sidebar → **Edit Period backfills Session (preselected 2025-26) / Name / Code / Short Code /
Alias / dates / Description** → **Edit Department backfills** → **Edit Blog mounts the Quill
editor toolbar** → network log shows **only module pre-requisite calls, all 200 — no
`config/pre-requisite` request at all, no 500**.

## What changed in v1.5.11.0 — verified against the LIVE original product (demo capture) + period-gate & select resilience pack

> This release was cross-checked against a **live, logged-in capture of the real
> product** (same ScriptMint family, demo.instikit.com): the router guard, the
> period-selection flow, the pre-requisite select pattern, the Quill editor and
> the real API response shapes were extracted from its production bundle and
> from real authenticated API responses (`demo-reference/REFERENCE.md`).

| Area | What the live original does | What changed in the SPA |
|---|---|---|
| **Academic-period gate** | no period selected → redirect to **Dashboard** with an info toast; a fixed whitelist stays reachable, including all academic setup pages (`/academic/departments`, `/academic/program-types`, `/academic/programs`, `/academic/sessions`, `/academic/periods`), `/config*`, `/user*`, `/teams*`, `/notifications*` | 1:1 guard ported to `router/index.js` — the whitelist is now exempt exactly like the original, so a fresh install can create its first period without any period selected |
| **Period selection** | header flyout, `POST /app/academic/periods/{uuid}/select`, then the user is re-fetched with `refresh_period=true` | already implemented and now verified against the live flow (the v5.5.3 backend has `periods/{period}/select`; the demo build uses `POST /app/{user}/period` — both kept working, the SPA uses the v5.5.3 route) |
| **"No options available" selects** | relation selects are filled from each module's `pre-requisite` (`{sessions:[], seeder:[]}` for periods, `{departments:[]}` for department-incharges, …) | **cross-module option fallback**: when a module's pre-requisite cannot serve a field, the SPA now fills the select from the matching academic list endpoint (`?all=true`) — departments, sessions, periods, programs, program-types, divisions, courses, batches, subjects, class-timings |
| **Silent empty pages** | — | every failure is now **visible**: list pages show an error alert with the HTTP status/message; action forms show a banner when options or the record fail to load; selects show "Loading options…" while in flight and a **Retry** button when the request failed |
| **Empty-array shadowing** | — | `config/pre-requisite` empty arrays can no longer shadow real option lists (both the select resolver and the fallback detector require non-empty arrays) |
| **Response shapes (verified live)** | period list `?all=true` → plain array; paged lists → `{data, links, meta}` (+`headers`); show → record **without envelope**; `ok()` = plain JSON | confirmed our parsing matches; `GET /api/v1/auth/user?refresh_period=true` confirmed to return `current_period_id` (`AuthUserResource::mergeWhen($request->refresh_period)`) |

## What changed in v1.5.10.0 — "department available but select says No options / edit forms empty / content editor missing" fix pack

> **This release found the one bug behind every remaining symptom.** The
> reconstructed entity spec (`resources/js/spec/entities.js`) and every generic
> CRUD page called endpoints like `academic/periods`, but the untouched Laravel
> backend mounts **every module route under `api/v1/app/...`**
> (`RouteServiceProvider` wraps `routes/modules/*.php` and `routes/app.php` in
> `Route::prefix('app')`). So all 1057 CRUD endpoints answered the Laravel 404
> fallback: lists empty, every `pre-requisite` select showed
> **"No options available"** (department, session, seeders, …) and every
> **edit form opened completely empty**.

| Symptom you reported | Root cause (confirmed against the untouched backend) | Fixed by |
|---|---|---|
| **"department available" in DB but the select shows *No options available*** | the Department/Program pre-requisite request went to `api/v1/academic/...` → Laravel 404 fallback → empty option list | ✅ all **1057 entity endpoints** re-prefixed to `app/...` (`app/academic/departments`, `app/academic/periods`, …) — exactly matching `Route::prefix('app')` |
| **Edit Period / Edit Department / every edit form opens empty** (Name, Code, Short Code, Alias, dates, Session, Seeders, Description all blank) | (1) the `show` request 404'd for the same prefix reason; (2) even with data, `CrudAction.loadRecord()` used `resolveKey()` **without importing it** — a runtime `ReferenceError` swallowed by the silent `catch` left the form untouched | ✅ endpoints prefixed + `import { resolveKey } from '@/lib/helpers'` added; relation objects (`session: {uuid,name,…}`) now unwrap to their **uuid** so the select actually matches an option |
| **Seeders multiselect empty on Add Period** | the backend's `PeriodService::preRequisite()` returns the key **`seeder` (singular)** while the field is `seeders` | ✅ `FormRelationSelect` resolves exact → plural → **singular** → fuzzy keys (`seeder`↔`seeders`, `departments`↔`department`, `sessions`↔`session`) |
| **"content text editor my old but it missing"** (plain text input instead of the editor) | the original frontend used the **Quill** rich text editor (`@vueup/vue-quill`, confirmed in the old build bundle); the rebuild rendered `<input type="text">` | ✅ real **Quill snow editor** restored (headers, bold/italic/underline/strike, quote, code, lists, sub/super, indent, align, link, image, video, clean) on: Certificate Template, Blog, Email, Mail Template, News, Post, Site Page/Post content — Quill ships **code-split** (166 kB chunk loads only on pages that use it); Config → Mail Template custom page also switched from `<textarea>` to Quill and its Subject from a broken empty select to a proper input |
| Config template pages (SMS / WhatsApp / Push) rendered Subject & Template as dead **"No options available"** selects | the generated custom pages used `FormRelationSelect` for fields the backend validates as **plain strings** (`subject: required|max:100`, `template_id: nullable|max:100`) | ✅ replaced with text inputs (Push: subject input + content textarea, matching `PushNotificationTemplateRequest`) |

**Also verified:** edit-time date fields receive the raw `Y-m-d` value (04/01/2025 renders in the date input), the 8 content fields keep the backend's max lengths, and `spec/entities.js` was re-synced with the corrected routes.

Verified end-to-end (mock backend + headless Chromium, **17/17 checks, zero page errors**): login → period picker Continue → periods list rows → **Edit Period backfills name/code/shortcode/alias/start+end dates/session (preselected `sess-1`)/description** → Add Period shows session options + Seeders multiselect → departments list rows → **Edit Department backfills** → Add Program shows **Department options** → **Edit Blog mounts the Quill toolbar with "Hello **rich** world" loaded** (screenshot-verified styling).

> **Deploy note:** this release adds one npm dependency (`@vueup/vue-quill`). After
> extracting, run **`npm install`** once before `npm run build`.

## What changed in v1.5.9.0 — "select / data pattern" full checkup

| Symptom | Root cause | Fixed by |
|---|---|---|
| **List pages render rows of dashes (`—`) / "data pattern not work"** | the untouched backend's resources return **snake_case** keys (`code_number`, `father_name`, `batch_name`, …) and Cal date objects (`birth_date: {type, value, formatted, …}`), while the reconstructed entity specs used **camelCase** column keys (`codeNumber`, `birthDate`) — every lookup missed and the cell fell back to the dash placeholder | ✅ new `resolveKey()` in `lib/helpers.js` resolves every column/field against exact, snake_case, camelCase **and dot-path** variants; `displayValue()` renders Cal objects as their `formatted` date, enum details as labels, arrays comma-joined, booleans as Yes/No |
| same mismatch broke **edit forms** (fields came back empty when opening an existing record) | `CrudAction.loadRecord()` read `record[f.n]` directly | ✅ uses `resolveKey()` and unwraps Cal objects to their raw `.value` for date/number inputs |
| **Selects offered no choices / choose-period pages errored with a bare 422 toast** | while no academic period is selected the backend's `UserConfig` middleware answers **422 "Please select a period to continue."** for every non-whitelisted endpoint — the frontend only toasted it | ✅ the axios interceptor now detects that exact 422 and **opens the global period picker automatically** (with an info toast) — the same behaviour the original UI had |
| **Period picker dead-ended non-admin accounts** ("only show this, nothing to do") | the list + Continue button were gated behind `auth.can('period:change')`; accounts without `period:change` only saw the static note | ✅ the list and Continue are now available to **every signed-in user** (the backend still enforces `period:change` on save with a clear 403 message); the picker preselects current → default → first period so one click continues |
| **Unknown URLs hard-404'd** ("The page you are looking for could not be found.") | the catch-all route rendered the 404 page even for signed-in users | ✅ signed-in users are redirected to the dashboard with a one-time "page not found — brought you here" notice; guests go to login. The named `/404` route still exists for explicit use |
| "Invalid credentials" shown when the server was unreachable | any error (including network failures) mapped to the credentials message | ✅ network-level failures now say "Cannot reach the server…" so a stopped WAMP/Laravel service is obvious |
| navigation could blank out when `/config` or `/auth/user` failed at boot | guard `await`ed both calls without protection | ✅ both bootstrap calls are try/caught — a failing backend degrades gracefully instead of blocking the router |
| `<base href>` mismatch made every route fall into the catch-all | base detection trusted the tag blindly | ✅ the tag is only honoured when it is really a prefix of the current path; trailing slashes are stripped before matching |

Verified end-to-end (mock backend + headless Chromium, **36/36 checks, zero runtime errors**): both deployment shapes (domain-root `/app` and WAMP sub-folder `/advaca/public/app`), login → dashboard, **hard-reload deep links** (students / periods / departments / config), unknown-URL redirect for signed-in users, forced period picker (list visible to everyone, one-click Continue, session skip), student list rendering **real resource-shaped data** (snake_case + Cal formatted dates + enum labels).

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
