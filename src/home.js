export default function home() {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  homeButton.style.borderBottom = "3px solid red";

  const homeHeader = document.createElement("p");
  homeHeader.classList.add("home-header");
  homeHeader.textContent = "Original Italian Cuisine";
  content.appendChild(homeHeader);
}
