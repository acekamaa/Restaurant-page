// src/scripts/home.js

export default function loadHome() {
  const content = document.getElementById('content');

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const heading = document.createElement('h1');
  heading.textContent = "Welcome to Kamau's Kitchen";

  const paragraph = document.createElement('p');
  paragraph.textContent = 'The best local and continental dishes served fresh daily.';

  homeDiv.appendChild(heading);
  homeDiv.appendChild(paragraph);

  content.appendChild(homeDiv);
}
