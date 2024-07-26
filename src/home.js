import grandfatherImage from "../src/images/grandfather.jpg";
import businesslogo from "../src/images/logo.jpeg";

export default function home() {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  const menuButton = document.querySelector("#menu-button");

  content.innerHTML = "";

  homeButton.style.borderBottom = "3px solid rgb(173, 23, 31)";
  menuButton.style.borderBottom = "none";

  //header

  const headerWrapper = document.createElement("div");
  headerWrapper.classList.add("home-header-wrapper");
  const homeHeader = document.createElement("h2");
  const homeHeaderEstablished = document.createElement("h4");
  const businessLogo = document.createElement("img");

  homeHeaderEstablished.classList.add("home-header-established");
  homeHeader.classList.add("home-header");
  businessLogo.classList.add("business-logo");
  businessLogo.src = businesslogo;
  homeHeader.textContent = "Original Italian Cuisine";
  homeHeaderEstablished.textContent = "Est. 1912";

  headerWrapper.appendChild(homeHeader);
  headerWrapper.appendChild(homeHeaderEstablished);
  headerWrapper.appendChild(businessLogo);

  //main content
  const intro = document.createElement("p");
  const grandfatherImg = document.createElement("img");

  grandfatherImg.classList.add("grandfather-img");
  grandfatherImg.src = grandfatherImage;
  grandfatherImg.alt = "picture of my then young Grandfather cooking";

  intro.classList.add("home-intro-text");
  intro.textContent =
    "My Grandfather built this Restaurant in the Heart of Italy and our family have been here ever since making only the best Italian dishes. We take pride in what we do, so satisfaction guaranteed or money back!";

  const notConvincedText = document.createElement("p");
  notConvincedText.textContent =
    "Still not convinced? Take a look at the reviews";

  const openingHoursWrapper = document.createElement("div");
  openingHoursWrapper.classList.add("opening-hours-wrapper");
  const openingHoursHeadline = document.createElement("p");
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

  content.appendChild(headerWrapper);
  content.appendChild(intro);
  content.appendChild(grandfatherImg);
  content.appendChild(notConvincedText);
  content.appendChild(openingHoursWrapper);
}
