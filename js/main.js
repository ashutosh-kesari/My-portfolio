/* ============================================
   ASHUTOSH KESARI PORTFOLIO — MAIN JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── CUSTOM CURSOR ── */
  var cursor = document.getElementById('cursor');
  var ring   = document.getElementById('cursorRing');

  // Current mouse position (dot snaps here instantly)
  var mx = -100, my = -100;
  // Ring lags behind
  var rx = -100, ry = -100;

  // Snap dot to mouse instantly — no transition on left/top
  document.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;

    // Dot follows instantly
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';

    // Show on first move
    if (!cursor.classList.contains('visible')) {
      cursor.classList.add('visible');
      ring.classList.add('visible');
    }
  });

  // Ring follows with smooth lag via RAF
  function animRing() {
    // Ease factor — bigger = faster ring catch-up
    var ease = 0.1;
    rx += (mx - rx) * ease;
    ry += (my - ry) * ease;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  // Hover state — grow ring, fill dot
  var hoverTargets = document.querySelectorAll(
    'a, button, .project-card, .social-card, .photo-item, .design-card, .community-card, .role-pill, .skill-chip, .nav-card, .portrait-container'
  );
  hoverTargets.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      cursor.classList.add('hover');
      ring.classList.add('hover');
    });
    el.addEventListener('mouseleave', function () {
      cursor.classList.remove('hover');
      ring.classList.remove('hover');
    });
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', function () {
    cursor.classList.remove('visible');
    ring.classList.remove('visible');
  });
  document.addEventListener('mouseenter', function () {
    cursor.classList.add('visible');
    ring.classList.add('visible');
  });

  /* ── HAMBURGER ── */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  /* ── SCROLL EFFECTS ── */
  var navbar = document.getElementById('navbar');
  var orb1 = document.querySelector('.hero-bg-orb1');
  var orb2 = document.querySelector('.hero-bg-orb2');
  var sections = document.querySelectorAll('section[id]');
  var navAs = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    var s = window.scrollY;

    // Navbar scrolled class
    if (s > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Parallax orbs (only when hero visible)
    if (orb1 && s < window.innerHeight) {
      orb1.style.transform = 'translateY(' + (s * 0.15) + 'px)';
      orb2.style.transform = 'translateY(' + (-s * 0.1) + 'px)';
    }

    // Active nav highlight
    var current = '';
    sections.forEach(function (sec) {
      if (s >= sec.offsetTop - 130) {
        current = sec.getAttribute('id');
      }
    });
    navAs.forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === '#' + current) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  });

  /* ── SCROLL REVEAL ── */
  var revealEls = document.querySelectorAll('.reveal');

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── CONTACT FORM ── */
  var formSubmit = document.getElementById('formSubmit');
  if (formSubmit) {
    formSubmit.addEventListener('click', function () {
      var btn = this;
      btn.textContent = 'Message Sent ✓';
      btn.style.background = 'linear-gradient(135deg, #2d8a5a, #1a6640)';
      btn.style.boxShadow = '0 6px 20px rgba(45,138,90,0.3)';
      setTimeout(function () {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.style.boxShadow = '';
      }, 3000);
    });
  }

  /* ── SMOOTH SECTION SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
