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

  //opening hours card
  const openingHoursWrapper = document.createElement("div");
  openingHoursWrapper.classList.add("opening-hours-wrapper");
  const openingHoursHeadline = document.createElement("p");
  openingHoursHeadline.classList.add("opening-hours-header");
  const openingHoursMonday = document.createElement("p");
  const openingHoursTuesday = document.createElement("p");
  const openingHoursWednesday = document.createElement("p");
  const openingHoursThursday = document.createElement("p");
  const openingHoursFriday = document.createElement("p");
  const openingHoursSaturday = document.createElement("p");

  openingHoursHeadline.textContent = "Opening Hours";
  openingHoursMonday.textContent = "Monday: 17:00 - 21:00";
  openingHoursTuesday.textContent = "Tuesday: 17:00 - 21:00";
  openingHoursWednesday.textContent = "Wednesday: 17:00 - 21:00";
  openingHoursThursday.textContent = "Thursday: 17:00 - 21:00";
  openingHoursFriday.textContent = "Friday: 17:00 - 23:00";
  openingHoursSaturday.textContent = "Saturday: 17:00 - 23:00";

  openingHoursWrapper.appendChild(openingHoursHeadline);
  openingHoursWrapper.appendChild(openingHoursMonday);
  openingHoursWrapper.appendChild(openingHoursTuesday);
  openingHoursWrapper.appendChild(openingHoursWednesday);
  openingHoursWrapper.appendChild(openingHoursThursday);
  openingHoursWrapper.appendChild(openingHoursFriday);
  openingHoursWrapper.appendChild(openingHoursSaturday);

  contactCard.appendChild(contactHeader);
  contactCard.appendChild(telNumber);
  contactCard.appendChild(email);

  content.appendChild(contactCard);
  content.appendChild(openingHoursWrapper);
}
