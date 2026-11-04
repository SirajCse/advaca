# Advaca — Vue 3 Frontend (reconstructed)

Reconstructed `resources/js` + `resources/css` frontend for the advaca Laravel application (tag v1.5.5.2),
reverse-engineered from the compiled Vite bundle (`public/build/manifest.json`, `public/build/assets`)
and the Laravel backend (routes, controllers, initURL API endpoints).

## Stack (matches the original compiled bundle)

- Vue 3 + Vue Router 4 + Vuex 4 (nested modules, `initURL` CRUD factory)
- Tailwind CSS 3 (theme color tokens: `--color-site-primary`, `--color-primary`, …, `.theme-*` / `.dark`)
- Laravel Vite plugin, `@vite(['resources/js/app.js'])`, mounts on `#root`
- Libraries detected in the original build: axios, moment + moment-timezone, mitt, sweetalert2,
  vue-toastification, floating-vue (`v-tooltip`, `VDropdown`, `VMenu`), @imengyu/vue3-context-menu,
  vue3-marquee, vue-tel-input, vue-flat-pickr + flatpickr, v-calendar, vuedraggable, yup, lodash,
  markdown-it + katex, md-editor-v3, codemirror v6 (+ language packs), @fortawesome/fontawesome-free, nprogress

## Install

```bash
# unzip so that resources/js, resources/css and config files merge into the Laravel project root
unzip advaca-vue-clean.zip -d /path/to/advaca/
cd /path/to/advaca
npm install
npm run dev      # dev server with HMR
npm run build    # production build -> public/build
```

The Laravel backend must be served in parallel (e.g. `php artisan serve`). The SPA expects:

- `@vite(['resources/js/app.js'])` in `resources/views/app.blade.php` with `<div id="root">`
- API under `/api/v1` (axios base), routes already present in the backend
- Vuex modules call `initURL` endpoints like `/app/academic/batches` — these exist in `routes/app.php`

## Fidelity check (verified)

A production build of this source produces a Vite manifest whose 812 `.vue` page entries
match the original `public/build/manifest.json` of tag v1.5.5.2 exactly — same paths,
same chunk structure, 0 missing, 0 extra.

## Structure

```
resources/js/
  app.js                     # createApp bootstrap: router, store, plugins, global components, mount #root
  bootstrap.js               # axios + CSRF (Laravel scaffold)
  core/
    http.js                  # axios instance (baseURL /api/v1, interceptors)
    trans.js                 # $trans translation helper
    form.js                  # $form helper (validation errors)
    cal.js                   # $cal date helpers (moment / moment-timezone)
    emitter.js               # mitt event bus
    crud.js                  # shared Vuex CRUD module factory (initURL based)
    store/
      index.js               # createStore with all 57 modules
      modules/<name>.js      # one file per module (nested for big domains)
    components/
      Forms/                 # BaseInput, BaseSelect, ... (auto-registered via import.meta.glob)
      Table/                 # DataTable, Pagination, ...
      Ui/                    # BaseModal, BaseCard, ...
  router/
    index.js                 # createRouter + auth/permission guards
    routes.js                # full original route tree (extracted from the compiled bundle)
  views/
    Layouts/                 # App, Guest, Blank, Empty, Error, Setup, User
    Components/              # globally registered components (PageHeader, AppNavigation, ...)
    Pages/                   # 812 page components, exact original paths from public/build/manifest.json
resources/css/app.css        # Tailwind + original theme tokens
```

## Add a new feature

1. Create the page components under `resources/js/views/Pages/<Module>/<Feature>/`:

   ```
   Index.vue   # list page
   Action.vue  # create/edit form page
   Show.vue    # detail page
   ```

2. Register routes in `resources/js/router/routes.js` (or generate them with the same shape the
   backend permissions use):

   ```js
   {
     path: 'employee/bonus',
     name: 'EmployeeBonusList',
     meta: { trans: 'employee.bonus.bonus', permissions: ['employee:read'] },
     component: () => import('@/views/Pages/Employee/Bonus/Index.vue'),
   },
   ```

3. Add a Vuex module (or reuse an existing one) pointing at the backend endpoint:

   ```js
   // core/store/modules/employee.js  -> children: bonus: makeModule('/app/employee/bonuses')
   ```

4. Add the matching backend API route + permission in Laravel. The frontend and backend stay in
   sync because every page's data layer is just its module `initURL`.

## More UI primitives

The original design system lives in `resources/js/core/components` (Base* components, DataTable…).
Drop-in additional primitives of the same style can be added there — anything in
`core/components` is auto-registered globally by `app.js` via `import.meta.glob`.
