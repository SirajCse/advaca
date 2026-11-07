/**
 * SPA base detection — works no matter how the Laravel app is served:
 *
 *   domain root vhost:  https://advaca.test/app/dashboard        -> base "/app"
 *   sub folder (WAMP):  http://localhost/advaca/public/app/...   -> base "/advaca/public/app"
 *
 * Laravel's web.php serves the SPA blade at `{prefix}/app/{vue?}`, so the
 * base is always the part of the current path up to (and including) the
 * last "/app" segment. The API then lives next to it at `{prefix}/api/v1`.
 */

export function detectAppBase() {
  // 1. an explicit <base href> in the blade always wins
  const baseEl = document.querySelector('base')
  if (baseEl && baseEl.getAttribute('href')) {
    const fromTag = stripTrailingSlash(baseEl.getAttribute('href').replace(/^\w+:\/\/[^/]+/, ''))
    // only trust the tag when it is really a prefix of the current path,
    // otherwise a stale tag would make every route fall into the catch-all
    if (window.location.pathname === fromTag || window.location.pathname.startsWith(fromTag + '/')) {
      return fromTag
    }
  }

  const path = stripTrailingSlash(window.location.pathname)

  // 2. "/…/app" or "/…/app/…" — everything before the final /app segment
  //    (greedy so nested copies like /advaca/public/app win over /app)
  const m = path.match(/^(.*\/app)(?=\/|$)/)
  if (m) return m[1]

  // 3. fallback: served directly at the domain root
  return '/app'
}

export function detectApiBase() {
  // {base}/app -> {base}/api/v1   (e.g. "/advaca/public/app" -> "/advaca/public/api/v1")
  return detectAppBase().replace(/\/app$/, '') + '/api/v1'
}

function stripTrailingSlash(s) {
  return s.length > 1 && s.endsWith('/') ? s.slice(0, -1) : s
}
