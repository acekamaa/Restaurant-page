// src/scripts/contact.js

export default function loadContact() {
  const content = document.getElementById("content");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 0712 345 678";

  const location = document.createElement("p");
  location.textContent = "📍 Thika, Kenya";

  contactDiv.appendChild(heading);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(location);

  content.appendChild(contactDiv);
}
