import grandfatherImage from "../src/images/grandfather.jpg";
import businesslogo from "../src/images/logo.jpeg";
import quoteimage from "../src/images/quote.png";
import { reviews } from "./review.js";

export default function home() {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  const menuButton = document.querySelector("#menu-button");
  const aboutButton = document.querySelector("#about-button");

  content.innerHTML = "";

  homeButton.style.borderBottom = "3px solid rgb(173, 23, 31)";
  menuButton.style.borderBottom = "none";
  aboutButton.style.borderBottom = "none";

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
  homeHeader.textContent = "Original Italian Cuisine Restaurant";
  homeHeaderEstablished.textContent = "Est. 1912";

  headerWrapper.appendChild(homeHeader);
  headerWrapper.appendChild(homeHeaderEstablished);
  headerWrapper.appendChild(businessLogo);

  //main content
  const intro = document.createElement("p");
  const grandfatherImg = document.createElement("img");
  const quoteImage = document.createElement("img");
  const introAndQuoteImageWrapper = document.createElement("div");

  //intro text and quote image
  introAndQuoteImageWrapper.classList.add("intro-text-and-quote-image-wrapper");

  quoteImage.src = quoteimage;
  quoteImage.classList.add("quote-image");

  intro.classList.add("home-intro-text");
  intro.textContent =
    "My Grandfather built this Restaurant in the Heart of Italy and our family have been here ever since making only the best Italian dishes. We take pride in what we do, so satisfaction guaranteed or money back!";
  introAndQuoteImageWrapper.appendChild(quoteImage);
  introAndQuoteImageWrapper.appendChild(intro);

  //grandfather image
  const grandfatherImageText = document.createElement("p");
  grandfatherImageText.classList.add("grandfather-image-text");
  grandfatherImageText.textContent =
    "My Grandfather chef Giovanni preparing a meal in the opening week of the Restaurant in 1912";
  const grandfatherImageWrapper = document.createElement("div");
  grandfatherImageWrapper.classList.add("grandfather-image-wrapper");
  grandfatherImg.classList.add("grandfather-img");
  grandfatherImg.src = grandfatherImage;
  grandfatherImg.alt = "picture of my then young Grandfather cooking";
  grandfatherImageWrapper.appendChild(grandfatherImg);
  grandfatherImageWrapper.appendChild(grandfatherImageText);

  const notConvincedText = document.createElement("p");
  notConvincedText.textContent =
    "Still not convinced? Take a look at the reviews";
  notConvincedText.classList.add("not-convinced-text");

  const review1Wrapper = document.createElement("div");

  content.appendChild(headerWrapper);
  content.appendChild(introAndQuoteImageWrapper);
  content.appendChild(grandfatherImageWrapper);
  content.appendChild(notConvincedText);
  content.appendChild(review1Wrapper);
  reviews(review1Wrapper);
}
