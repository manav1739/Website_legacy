// script.js - Small, beginner-friendly interactions
// 1) Mobile menu toggle
// 2) Contact form "submit" (demo, no backend)
// 3) Scroll-reveal animations (IntersectionObserver)
// 4) Smooth hero parallax on mouse move

(function () {
  'use strict';

  // --- Mobile menu ---
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  // --- Contact form (demo: no server, just shows a message) ---
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      status.textContent = `Thanks, ${name}! Your message was sent (demo).`;
      form.reset();
      setTimeout(() => { status.textContent = ''; }, 4000);
    });
  }

  // --- Scroll reveal ---
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback for very old browsers
    reveals.forEach((el) => el.classList.add('show'));
  }

  // --- Subtle parallax on hero orbs ---
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroVisual.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
})();
