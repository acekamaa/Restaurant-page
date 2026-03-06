// src/scripts/menu.js

export default function loadMenu() {
  const content = document.getElementById('content');

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const heading = document.createElement('h2');
  heading.textContent = 'Our Menu';

  // cards per menu-item
  const item1Div = document.createElement('div');
  item1Div.classList.add('burger-div');
  const item1 = document.createElement('p');
  item1.textContent = '🍔 Burger - KES 500';

  const item2Div = document.createElement('div');
  item2Div.classList.add('pizza-div');
  const item2 = document.createElement('p');
  item2.textContent = '🍕 Pizza - KES 800';

  const item3Div = document.createElement('div');
  item1Div.classList.add('pancakes-div');
  const item3 = document.createElement('p');
  item3.textContent = '🥞 Pancakes - KES 300';

  const item4Div = document.createElement('div');
  item1Div.classList.add('coffee-div');
  const item4 = document.createElement('p');
  item4.textContent = '☕ Coffee - KES 300';

  menuDiv.appendChild(heading);
  menuDiv.appendChild(item1Div);
  item1Div.appendChild(item1);
  menuDiv.appendChild(item2Div);
  item2Div.appendChild(item2);
  menuDiv.appendChild(item3Div);
  item3Div.appendChild(item3);
  menuDiv.appendChild(item4Div);
  item4Div.appendChild(item4);

  content.appendChild(menuDiv);
}
