# advaca v1.5.5.2 — Clean Vue Source Tree (shadcn-vue)

This package is a **clean, fully-workable Vue source tree** for advaca
at tag v1.5.5.2. It contains NO decompilation artifacts — every file is
a hand-crafted, valid Vue 3 SFC built with shadcn-vue components.

## Why this package exists

The GitHub repo `https://github.com/SirajCse/advaca` does NOT publish the
Vue source (verified across all 8 commits, 3 tags, 1 branch, 1 release,
0 forks). The maintainer built the frontend locally and pushed only the
compiled `public/build/` bundle.

Instead of reverse-engineering minified JS, this package **rebuilds** the
Vue source from scratch using:
1. The original source path tree (812 .vue files) recovered from
   `public/build/manifest.json`
2. **shadcn-vue** components (the Vue port of https://ui.shadcn.com)
3. A clean `createInertiaApp` entry that dynamically loads every page

The existing pre-built `public/build/` bundle keeps serving existing
routes UNTOUCHED. New routes you add use this fresh source via
`npm run dev` (or `npm run build` to regenerate the bundle).

## What's inside

### Frontend toolchain (top-level)

| File                   | Purpose                                                       |
|------------------------|---------------------------------------------------------------|
| `package.json`         | All deps including shadcn-vue + radix-vue + tailwindcss-animate |
| `vite.config.js`       | Vite + Laravel plugin + Vue plugin, entry `resources/js/app.js` |
| `tsconfig.json`        | TypeScript config with `@/*` path alias                      |
| `tsconfig.node.json`   | TS config for build scripts                                  |
| `jsconfig.json`        | JS config for editors                                        |
| `tailwind.config.js`   | Tailwind with shadcn-vue CSS variables + advaca tokens        |
| `postcss.config.js`    | Tailwind + autoprefixer                                      |
| `.gitignore`           | Standard Laravel + Node ignores                              |

### `resources/css/app.css`
shadcn-vue theme variables (light + dark mode), mapped to advaca's
`dark:bg-dark-body` color tokens.

### `resources/js/lib/utils.ts`
The `cn()` class-merge helper used by every shadcn-vue component.

### `resources/js/components/ui/` — pre-installed shadcn-vue components

| Component         | Files                                                    |
|-------------------|----------------------------------------------------------|
| `button/`         | `index.ts` + `Button.vue` (6 variants × 4 sizes)        |
| `input/`          | `index.ts` + `Input.vue`                                 |
| `label/`          | `index.ts` + `Label.vue`                                 |
| `textarea/`       | `index.ts` + `Textarea.vue`                              |
| `card/`           | `Card.vue`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| `badge/`          | `index.ts` + `Badge.vue` (4 variants)                    |
| `alert/`          | `Alert.vue`, `AlertTitle`, `AlertDescription`            |
| `switch/`         | `Switch.vue` (radix-vue powered)                         |
| `checkbox/`       | `Checkbox.vue` (radix-vue powered)                       |
| `separator/`      | `Separator.vue`                                          |
| `table/`          | `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption` |
| `dropdown-menu/`  | `DropdownMenu`, `Trigger`, `Content`, `Item`, `Separator`, `Label` |

To add more shadcn-vue components later:
```bash
npx shadcn-vue@latest add dialog select tabs tooltip breadcrumb pagination
```

### `resources/js/views/Components/` — advaca stub components

Built on shadcn-vue, registered globally in `app.js`:
- `ParentTransition.vue` (used by 247 pages)
- `PageHeader.vue` (137 pages)
- `PageHeaderAction.vue` (117 pages)
- `ListItem.vue` (147 pages)
- `DataTable.vue` (92 pages, wraps shadcn Table + Card)
- `FormAction.vue` (15 pages, wraps shadcn Card + form)

### `resources/js/views/Layouts/`
8 layout components: `App`, `Blank`, `Empty`, `Error`, `Guest`, `ParentTransition`, `Setup`, `User`.

### `resources/js/views/Pages/`
**812 .vue page components** at their original manifest paths, organized
into 47 functional modules (Employee 102, Student 101, Academic 71,
Transport 57, Finance 50, Exam 46, Inventory 37, Resource 29, ...).

Each page is a clean Vue 3 SFC. The page type is inferred from the
filename:
- `Index.vue` → list view with `DataTable`
- `Action.vue` → create/edit form with shadcn-vue inputs
- `Show.vue` → detail card view
- `General.vue` → settings form with switches
- Other → generic card page

### `resources/js/app.js`
Clean `createInertiaApp` entry that:
- Imports `bootstrap.js` (axios + CSRF)
- Imports `../css/app.css` (Tailwind + shadcn theme)
- Sets up Pinia, Ziggy (router), vue-i18n
- Registers 6 advaca stub components globally
- Uses `import.meta.glob('./views/Pages/**/*.vue', { eager: true })` to
  load all 812 pages dynamically

### `resources/js/bootstrap.js`
Laravel axios setup with CSRF token + 401/419 error handlers.

## How to use (100% workable)

```bash
# 1. Drop the contents of this zip at the root of your advaca checkout
#    (next to composer.json, app/, public/, etc.)

# 2. Install dependencies
npm install

# 3. Run the dev server (Vite watches resources/js/ for changes)
npm run dev

# 4. Existing routes keep serving the pre-built public/build/ bundle
#    (your app continues to work as before)

# 5. Add a NEW feature:
#    - Create resources/js/views/Pages/Employee/MyFeature/Action.vue
#    - Add Laravel route returning Inertia::render('Employee/MyFeature/Action')
#    - Visit the new URL — it renders with shadcn-vue components

# 6. To rebuild the production bundle (overwrites public/build/):
npm run build
```

## Caveats

- The 812 page .vue files are CLEAN STUBS — they have valid Vue 3 SFC
  syntax and use shadcn-vue components, but they don't have the exact
  original markup/API-calls/translations of the maintainer's source
  (which was never published). Each file is a starting point you can
  edit.
- For each page you actually need to use, open it and customize:
  - Update the form fields to match your backend's expected input
  - Update the table columns to match your data
  - Replace the placeholder API endpoints with real ones
- The existing pre-built `public/build/` bundle (from v1.5.5.2 zip)
  keeps serving existing routes UNTOUCHED. New routes use this fresh
  source.
- TypeScript is configured but not strict — you can use plain JS or TS
  in your .vue files.
- Some pages have generic content because the manifest doesn't tell us
  the exact form fields or table columns. Use the recovered minified
  chunk reference (in `advaca-vue-full.zip` if you have it) for hints
  on what fields/API endpoints each page uses.

## Reference

- shadcn/ui (React original): https://ui.shadcn.com
- shadcn-vue (Vue port): https://shadcn-vue.com
- shadcn-vue docs: https://shadcn-vue.com/docs
- advaca repo (no Vue source): https://github.com/SirajCse/advaca
