// src/scripts/menu.js

export default function loadMenu() {
  const content = document.getElementById('content');

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const heading = document.createElement('h2');
  heading.textContent = 'Our Menu';

  const item1 = document.createElement('p');
  item1.textContent = '🍔 Burger - KES 500';

  const item2 = document.createElement('p');
  item2.textContent = '🍕 Pizza - KES 800';

  menuDiv.appendChild(heading);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);

  content.appendChild(menuDiv);
}
