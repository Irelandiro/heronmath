// Monty Math — main.js

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Subtle scroll effect on nav
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(139,114,214,0.25)';
  } else {
    nav.style.borderBottomColor = 'rgba(43,33,56,0.10)';
  }
});

// Fullscreen toggle for the web app (play page only)
const fullscreenBtn = document.querySelector('#fullscreen-btn');
const gameFrame = document.querySelector('.game-frame');
if (fullscreenBtn && gameFrame) {
  fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (gameFrame.requestFullscreen) {
      gameFrame.requestFullscreen();
    }
  });
}
