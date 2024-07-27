import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const menuButton = document.querySelector("#menu-button");
const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#about-button");

home();

homeButton.addEventListener("click", () => {
  home();
});

menuButton.addEventListener("click", () => {
  menu();
});

aboutButton.addEventListener("click", () => {
  about();
});
