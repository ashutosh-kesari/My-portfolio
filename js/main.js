/* ================================================================
   ASHUTOSH KESARI PORTFOLIO — MAIN JS
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ══════════════════════════════════════════
     SECURITY LAYER
  ══════════════════════════════════════════ */

  /* 1. Disable right-click */
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); return false; });

  /* 2. Disable image drag */
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') { e.preventDefault(); return false; }
  });

  /* 3. Block keyboard shortcuts */
  document.addEventListener('keydown', function (e) {
    var lb = document.getElementById('lightbox');
    var lbOpen = lb && lb.classList.contains('open');
    if (lbOpen) return; // let render.js handle keys when lightbox open
    if (
      (e.ctrlKey || e.metaKey) && (
        e.key === 's' || e.key === 'S' ||
        e.key === 'u' || e.key === 'U' ||
        e.key === 'p' || e.key === 'P' ||
        e.key === 'a' || e.key === 'A' ||
        (e.shiftKey && ['i','I','j','J','c','C'].indexOf(e.key) !== -1)
      )
    ) { e.preventDefault(); return false; }
    if (e.key === 'F12' || e.key === 'PrintScreen') { e.preventDefault(); return false; }
  });

  /* 4. Block copy */
  document.addEventListener('copy', function (e) { e.preventDefault(); return false; });

  /* 5. Block print */
  window.addEventListener('beforeprint', function () {
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;background:#0e0a09;color:#ff6b3d"><div><h1 style="font-size:32px;margin-bottom:12px">Protected Content</h1><p style="color:#fff">This portfolio is personal and protected.</p></div></div>';
  });

  /* 6. DevTools detection */
  var dtWarning = null;
  function checkDevTools() {
    var open = window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160;
    if (open && !dtWarning) {
      dtWarning = document.createElement('div');
      dtWarning.style.cssText = 'position:fixed;inset:0;background:rgba(14,10,9,0.97);z-index:999999;display:flex;align-items:center;justify-content:center;font-family:Poppins,sans-serif;text-align:center';
      dtWarning.innerHTML = '<div><div style="font-size:48px;margin-bottom:16px">&#128274;</div><h2 style="color:#ff6b3d;font-size:24px;margin-bottom:12px">Protected Portfolio</h2><p style="color:rgba(255,255,255,0.7);font-size:15px;max-width:360px;line-height:1.6">This content belongs to <strong style="color:#fff">Ashutosh Kesari</strong>.<br>Close developer tools to continue.</p></div>';
      document.body.appendChild(dtWarning);
    } else if (!open && dtWarning) {
      dtWarning.remove();
      dtWarning = null;
    }
  }
  setInterval(checkDevTools, 1000);

  /* 7. Re-enable pointer events on shields */
  document.querySelectorAll('.img-shield').forEach(function (s) { s.style.pointerEvents = 'all'; });

  /* ══════════════════════════════════════════
     CUSTOM CURSOR
  ══════════════════════════════════════════ */
  var cursor = document.getElementById('cursor');
  var ring   = document.getElementById('cursorRing');
  var mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    if (!cursor.classList.contains('visible')) { cursor.classList.add('visible'); ring.classList.add('visible'); }
  });

  (function animRing() {
    rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a,button,.project-card,.social-card,.photo-item,.design-card,.community-card,.poem-card,.role-pill,.skill-chip,.nav-card,.portrait-container').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
  });
  document.addEventListener('mouseleave', function () { cursor.classList.remove('visible'); ring.classList.remove('visible'); });
  document.addEventListener('mouseenter', function () { cursor.classList.add('visible'); ring.classList.add('visible'); });

  /* ══════════════════════════════════════════
     HAMBURGER
  ══════════════════════════════════════════ */
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', function () { navLinks.classList.toggle('open'); hamburger.classList.toggle('open'); });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { navLinks.classList.remove('open'); hamburger.classList.remove('open'); });
  });

  /* ══════════════════════════════════════════
     SCROLL EFFECTS
  ══════════════════════════════════════════ */
  var navbar   = document.getElementById('navbar');
  var orb1     = document.querySelector('.hero-bg-orb1');
  var orb2     = document.querySelector('.hero-bg-orb2');
  var sections = document.querySelectorAll('section[id]');
  var navAs    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    var s = window.scrollY;
    navbar.classList.toggle('scrolled', s > 50);
    if (s < window.innerHeight) {
      if (orb1) orb1.style.transform = 'translateY(' + (s * 0.15) + 'px)';
      if (orb2) orb2.style.transform = 'translateY(' + (-s * 0.1) + 'px)';
    }
    var current = '';
    sections.forEach(function (sec) { if (s >= sec.offsetTop - 130) current = sec.getAttribute('id'); });
    navAs.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
  });

  /* ══════════════════════════════════════════
     SCROLL REVEAL
  ══════════════════════════════════════════ */
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObs.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

  /* ══════════════════════════════════════════
     CONTACT FORM
  ══════════════════════════════════════════ */
  var formSubmit = document.getElementById('formSubmit');
  if (formSubmit) {
    formSubmit.addEventListener('click', function () {
      var btn = this;
      btn.textContent = 'Message Sent \u2713';
      btn.style.background = 'linear-gradient(135deg,#2d8a5a,#1a6640)';
      btn.style.boxShadow  = '0 6px 20px rgba(45,138,90,0.3)';
      setTimeout(function () { btn.textContent = 'Send Message \u2192'; btn.style.background = ''; btn.style.boxShadow = ''; }, 3000);
    });
  }

  /* ══════════════════════════════════════════
     SMOOTH SCROLL
  ══════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
