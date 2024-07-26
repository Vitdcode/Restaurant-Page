import "./style.css";
import home from "./home.js";
import menu from "./menu.js";

const menuButton = document.querySelector("#menu-button");
const homeButton = document.querySelector("#home-button");

/* home(); */

homeButton.addEventListener("click", () => {
  home();
});

menuButton.addEventListener("click", () => {
  menu();
});
