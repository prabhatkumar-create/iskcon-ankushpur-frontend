document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Sticky header background on scroll ---------- */
  const header = document.getElementById('siteHeader');
  const backToTop = document.getElementById('backToTop');

  function handleScroll () {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ---------- Back to top ---------- */
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Close mobile nav on link click ---------- */
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('#navMenu .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        bsCollapse.hide();
      }
    });
  });

  /* ---------- Active nav link on scroll (scrollspy-lite) ---------- */
  const sections = document.querySelectorAll('section[id]');
  function setActiveLink () {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  /* ---------- Play button opens video modal ---------- */
  const playBtn = document.getElementById('playBtn');
  const videoModalEl = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const videoModal = new bootstrap.Modal(videoModalEl);
  // Replace with your actual temple video URL (YouTube embed link)
  const TEMPLE_VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

  playBtn.addEventListener('click', function () {
    videoFrame.src = TEMPLE_VIDEO_URL;
    videoModal.show();
  });
  videoModalEl.addEventListener('hidden.bs.modal', function () {
    videoFrame.src = '';
  });

  /* ---------- Scroll reveal animation ---------- */
  const revealEls = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));

  /* ---------- Donate button click handlers ---------- */
  const rupeeBtn = document.querySelector('.btn-rupee');
  const clickHereBtn = document.querySelector('.btn-click-here');
  [rupeeBtn, clickHereBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        // Replace this with your real donation page / payment gateway link
        window.location.href = '#donate';
      });
    }
  });

});