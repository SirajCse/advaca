# ============================================================
#  fix-advaca-part2.ps1  —  Run after fix-advaca.ps1
#  Fixes: vite.config ESM issue + Link/Head global registration
#         + <Link href> -> <Link to> in all pages
# ============================================================

 $ErrorActionPreference = 'Stop'
 $root = "D:\wamp\www\advaca"
Set-Location $root

Write-Host ""
Write-Host "==== Fix 1: Rename vite.config.js -> vite.config.mjs ====" -ForegroundColor Cyan

if (Test-Path "$root\vite.config.js") {
    if (Test-Path "$root\vite.config.mjs") {
        Remove-Item "$root\vite.config.mjs" -Force
    }
    Move-Item "$root\vite.config.js" "$root\vite.config.mjs" -Force
    Write-Host "[OK] Renamed vite.config.js -> vite.config.mjs" -ForegroundColor Green
}

# Overwrite with a known-good ESM config
 $viteConfig = @'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: { base: null, includeAbsolute: false },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
'@
Set-Content -Path "$root\vite.config.mjs" -Value $viteConfig -Encoding UTF8
Write-Host "[OK] Wrote clean vite.config.mjs" -ForegroundColor Green

Write-Host ""
Write-Host "==== Fix 2: Register Link/Head globally in app.js ====" -ForegroundColor Cyan

 $appJsPath = "$root\resources\js\app.js"
 $appJs = Get-Content $appJsPath -Raw -Encoding UTF8

# Add RouterLink/RouterView import at top (after the first existing import)
if ($appJs -notmatch "RouterLink") {
    $appJs = "import { RouterLink, RouterView } from 'vue-router'`r`n" + $appJs
}

# Register Link as RouterLink + Head as a passthrough slot component
if ($appJs -notmatch "app\.component\('Link'") {
    $appJs = $appJs -replace "app\.mount\('#app'\)", "app.component('Link', RouterLink)`r`napp.component('Head', { inheritAttrs: false, template: '<slot />' })`r`napp.component('RouterView', RouterView)`r`napp.mount('#app')"
}

Set-Content -Path $appJsPath -Value $appJs -Encoding UTF8
Write-Host "[OK] app.js now registers Link=RouterLink, Head=<slot/>" -ForegroundColor Green

Write-Host ""
Write-Host "==== Fix 3: Convert <Link href= -> <Link to= in all pages ====" -ForegroundColor Cyan

 $pagesRoot = "$root\resources\js\views\Pages"
 $pages = Get-ChildItem -Path $pagesRoot -Recurse -Filter *.vue
 $count = 0

foreach ($f in $pages) {
    $c = Get-Content $f.FullName -Raw -Encoding UTF8
    $orig = $c

    # <Link href="x"  ->  <Link to="x"
    $c = $c -replace '(<Link\b[^>]*?)\shref="', '$1 to="'
    # <Link :href="x" ->  <Link :to="x"
    $c = $c -replace '(<Link\b[^>]*?)\s:href="', '$1 :to="'

    if ($c -ne $orig) {
        Set-Content -Path $f.FullName -Value $c -NoNewline -Encoding UTF8
        $count++
    }
}
Write-Host "[OK] Converted Link href -> to in $count pages" -ForegroundColor Green

Write-Host ""
Write-Host "==== Fix 4: Also convert any leftover Link in Layouts/Components ====" -ForegroundColor Cyan

 $otherDirs = @("$root\resources\js\views\Layouts", "$root\resources\js\views\Components")
 $otherCount = 0

foreach ($d in $otherDirs) {
    if (-not (Test-Path $d)) { continue }
    $otherPages = Get-ChildItem -Path $d -Recurse -Filter *.vue
    foreach ($f in $otherPages) {
        $c = Get-Content $f.FullName -Raw -Encoding UTF8
        $orig = $c
        $c = $c -replace '(<Link\b[^>]*?)\shref="', '$1 to="'
        $c = $c -replace '(<Link\b[^>]*?)\s:href="', '$1 :to="'
        if ($c -ne $orig) {
            Set-Content -Path $f.FullName -Value $c -NoNewline -Encoding UTF8
            $otherCount++
        }
    }
}
Write-Host "[OK] Converted Link in $otherCount layout/component files" -ForegroundColor Green

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  PART 2 DONE!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Now run:  npm run dev" -ForegroundColor White
Write-Host "  Open:     http://advaca.test/" -ForegroundColor White
Write-Host ""