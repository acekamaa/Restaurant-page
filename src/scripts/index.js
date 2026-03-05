console.log('Welcome to our Restaurant');

// src/scripts/index.js

import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

function initializeWebsite() {
  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const contactBtn = document.getElementById('contact-btn');

  // Load default page
  loadHome();

  homeBtn.addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  contactBtn.addEventListener('click', () => {
    clearContent();
    loadContact();
  });
}

initializeWebsite();
