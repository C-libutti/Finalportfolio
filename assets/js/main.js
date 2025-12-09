(function(){
  // main.js — handles nav link rewriting and interactivity
  function computePrefix(){
    var path = location.pathname.replace(/\\/g,'/');
    var prefix = '';
    if(path.indexOf('/projects/photography/')!==-1) prefix='../../';
    else if(path.indexOf('/projects/')!==-1) prefix='../';
    return prefix;
  }

  var prefix = computePrefix();

  // rewrite links with data-href
  document.querySelectorAll('[data-href]').forEach(function(el){
    var href = el.getAttribute('data-href');
    if(!href) return;
    el.setAttribute('href', prefix + href);
  });

  // active link highlight
  (function highlight(){
    try{
      var current = location.pathname.split('/').pop();
      if(!current) current = 'index.html';
      document.querySelectorAll('a[href]').forEach(function(a){
        var href = a.getAttribute('href');
        if(!href) return;
        var cmp = href.replace(/.*\//,'');
        if(cmp === current) a.classList.add('active-link');
      });
    }catch(e){/* ignore */}
  })();

  // mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.querySelector('.site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      siteNav.classList.toggle('mobile-open');
    });
  }

  // dropdown buttons
  document.querySelectorAll('.drop-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
      var parent = btn.parentElement;
      parent.classList.toggle('drop-open');
    });
  });

  // close dropdowns on outside click (desktop)
  document.addEventListener('click', function(e){
    if(e.target.closest('.has-dropdown')) return;
    document.querySelectorAll('.has-dropdown').forEach(function(el){ el.classList.remove('drop-open'); });
  });

  // enhance buttons that were anchors with no default href
  document.querySelectorAll('a').forEach(function(a){
    if(a.getAttribute('href') && a.getAttribute('href').indexOf('http')===-1){
      // local link — no-op
    }
  });
})();
