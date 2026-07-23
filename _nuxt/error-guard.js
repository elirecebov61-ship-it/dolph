(function() {
  var originalFetch = window.fetch;
  window.fetch = function() {
    var args = arguments;
    return originalFetch.apply(this, args).then(function(response) {
      if (!response.ok) {
        return new Response(JSON.stringify({entries: [], data: [], items: [], results: [], list: []}), {
          status: 200,
          headers: {'Content-Type': 'application/json'}
        });
      }
      return response;
    }).catch(function() {
      return new Response(JSON.stringify({entries: [], data: [], items: [], results: [], list: []}), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
      });
    });
  };
  window.addEventListener('error', function(e) {
    console.warn('Caught error (suppressed):', e.message);
    e.preventDefault();
  });
  window.addEventListener('unhandledrejection', function(e) {
    console.warn('Caught promise rejection (suppressed):', e.reason);
    e.preventDefault();
  });
})();
