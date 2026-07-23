window.__NUXT__ = window.__NUXT__ || {};
window.__NUXT__.data = window.__NUXT__.data || {};
window.__NUXT__.error = null;

(function() {
  var originalFetch = window.fetch;
  window.fetch = function() {
    return originalFetch.apply(this, arguments).then(function(r) {
      return r.ok ? r : new Response(JSON.stringify({entries:[],data:[],items:[],results:[],list:[]}), {status:200, headers:{'Content-Type':'application/json'}});
    }).catch(function() {
      return new Response(JSON.stringify({entries:[],data:[],items:[],results:[],list:[]}), {status:200, headers:{'Content-Type':'application/json'}});
    });
  };
  window.onerror = function() { return true; };
  window.addEventListener('error', function(e) { e.stopImmediatePropagation(); e.preventDefault(); }, true);
  window.addEventListener('unhandledrejection', function(e) { e.preventDefault(); }, true);
})();
