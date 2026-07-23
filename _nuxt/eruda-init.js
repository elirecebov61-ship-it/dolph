(function() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/eruda';
  script.onload = function() { eruda.init(); };
  document.head.appendChild(script);
})();
