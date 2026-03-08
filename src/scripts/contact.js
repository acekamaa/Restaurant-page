// src/scripts/contact.js

export default function loadContact() {
  const content = document.getElementById("content");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";

  const form = document.createElement("form");
  form.classList.add("contact-form");

  // NAME
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  nameLabel.setAttribute("for", "name");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.placeholder = "Enter your name";
  nameInput.required = true;

  // EMAIL
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  emailLabel.setAttribute("for", "email");

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Enter your email";
  emailInput.required = true;

  // MESSAGE
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  messageLabel.setAttribute("for", "message");

  const messageInput = document.createElement("textarea");
  messageInput.id = "message";
  messageInput.name = "message";
  messageInput.rows = 5;
  messageInput.placeholder = "Write your message...";
  messageInput.required = true;

  // SUBMIT BUTTON
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Send Message";

  // APPEND ELEMENTS
  form.append(
    nameLabel,
    nameInput,
    emailLabel,
    emailInput,
    messageLabel,
    messageInput,
    submitBtn
  );

  contactDiv.append(heading, form);
  content.appendChild(contactDiv);

  // FORM HANDLING
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! We'll contact you soon.");
    form.reset();
  });
}
