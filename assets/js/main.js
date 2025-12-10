document.addEventListener('DOMContentLoaded', function(){
  // main.js handles dropdown and navigation interactivity
  
  // active link highlight
  (function highlight(){
    try{
      var current = location.pathname.split('/').pop();
      if(!current || current === '') current = 'index.html';
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

  // dropdown button handler — use .is-open class (not .drop-open)
  document.querySelectorAll('.drop-btn').forEach(function(btn){
    btn.setAttribute('role','button');
    btn.setAttribute('aria-expanded','false');
    btn.setAttribute('aria-haspopup','menu');
    
    var dropdown = btn.nextElementSibling;
    if(dropdown && dropdown.classList.contains('dropdown-menu')){
      btn.setAttribute('aria-controls', dropdown.id || 'dropdown-' + Math.random().toString(36).substr(2,9));
    }

    btn.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      var parent = btn.parentElement;
      var isOpen = parent.classList.contains('is-open');

      // close all other dropdowns
      document.querySelectorAll('.has-dropdown').forEach(function(el){
        el.classList.remove('is-open');
        var b = el.querySelector('.drop-btn');
        if(b) b.setAttribute('aria-expanded','false');
      });

      // toggle this dropdown
      if(!isOpen){
        parent.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
        btn.focus();
      }
    });
  });

  // close all dropdowns on outside click
  document.addEventListener('click', function(e){
    // if click is inside a dropdown, don't close
    if(e.target.closest('.has-dropdown')) return;
    
    document.querySelectorAll('.has-dropdown').forEach(function(el){
      el.classList.remove('is-open');
      var b = el.querySelector('.drop-btn');
      if(b) b.setAttribute('aria-expanded','false');
    });
  });

  // close dropdowns on Escape key
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' || e.key === 'Esc'){
      document.querySelectorAll('.has-dropdown').forEach(function(el){
        el.classList.remove('is-open');
        var b = el.querySelector('.drop-btn');
        if(b) b.setAttribute('aria-expanded','false');
      });
    }
  });

  // close dropdown when a menu item is clicked
  document.querySelectorAll('.dropdown-menu a').forEach(function(link){
    link.setAttribute('role','menuitem');
    link.addEventListener('click', function(){
      var dropdown = link.closest('.has-dropdown');
      if(dropdown){
        dropdown.classList.remove('is-open');
        var btn = dropdown.querySelector('.drop-btn');
        if(btn) btn.setAttribute('aria-expanded','false');
      }
    });
  });

  // keyboard navigation in dropdowns (up/down arrows, Enter, etc.)
  document.addEventListener('keydown', function(e){
    var dropdown = e.target.closest('.has-dropdown.is-open');
    if(!dropdown) return;

    var menu = dropdown.querySelector('.dropdown-menu');
    if(!menu) return;

    var items = menu.querySelectorAll('a');
    var current = document.activeElement;
    var currentIndex = Array.from(items).indexOf(current);

    if(e.key === 'ArrowDown'){
      e.preventDefault();
      var next = items[currentIndex + 1];
      if(next) next.focus();
    } else if(e.key === 'ArrowUp'){
      e.preventDefault();
      var prev = items[currentIndex - 1];
      if(prev) prev.focus();
    }
  });

  // enhance buttons that were anchors with no default href
  document.querySelectorAll('a').forEach(function(a){
    if(a.getAttribute('href') && a.getAttribute('href').indexOf('http')===-1){
      // local link — no-op
    }
  });
});
