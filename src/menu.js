import pastaimage1 from "../src/images/pasta1.jpg";
import pastaimage2 from "../src/images/pasta2.jpg";
import pizzaimage1 from "../src/images/pizza1.jpg";
import pizzaimage2 from "../src/images/pizza2.jpg";

export default function menu() {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  const menuButton = document.querySelector("#menu-button");

  content.innerHTML = "";

  homeButton.style.borderBottom = "none";
  menuButton.style.borderBottom = "3px solid rgb(173, 23, 31)";

  const menuHeader = document.createElement("h2");
  menuHeader.classList.add("menu-header");
  menuHeader.textContent = "Menu";

  const pastaCard = document.createElement("div");
  pastaCard.classList.add("pasta-card");
  const bucatiniPasta = document.createElement("p");

  bucatiniPasta.textContent = "Bucatini Pasta: 20$";

  pastaCard.appendChild(bucatiniPasta);

  content.appendChild(menuHeader);
  content.appendChild(pastaCard);
}
