export default function about() {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  const menuButton = document.querySelector("#menu-button");
  const aboutButton = document.querySelector("#about-button");

  content.innerHTML = "";

  homeButton.style.borderBottom = "none";
  menuButton.style.borderBottom = "none";
  aboutButton.style.borderBottom = "3px solid rgb(173, 23, 31)";

  const contactCard = document.createElement("div");
  contactCard.classList.add("about-contact-card");

  const contactHeader = document.createElement("h2");
  contactHeader.classList.add("contact-header");
  contactHeader.textContent = "Contact Information";

  const telNumber = document.createElement("p");
  telNumber.textContent = "Tel. 555-555-555";

  const email = document.createElement("p");
  email.textContent = "Email: example@dummyEmail.com";

  contactCard.appendChild(contactHeader);
  contactCard.appendChild(telNumber);
  contactCard.appendChild(email);

  content.appendChild(contactCard);
}
