import fivestarimage from "../src/images/5stars.png";
import user1image from "../src/images/profilePics/profile-pic1.png";
import quoteimage from "../src/images/review-quote.png";
const content = document.querySelector("#content");

export function reviews1to3(reviewWrapper) {
  const reviewsMainWrapper = document.createElement("div");
  reviewsMainWrapper.classList.add("reviews-main-wrapper");
  //review 1
  const review1Wrapper = document.createElement("div");
  review1Wrapper.classList.add("review-wrapper-1");
  const review1Userimage = document.createElement("img");
  review1Userimage.src = user1image;
  review1Userimage.classList.add("review-user-image1");
  review1Userimage.classList.add("review-user-image");
  const review1Username = document.createElement("p");
  review1Username.textContent = "Mike1990";
  const fiveStarsImage = document.createElement("img");
  fiveStarsImage.src = fivestarimage;
  fiveStarsImage.classList.add("five-stars-image");
  const reviewQuoteImage = document.createElement("img");
  reviewQuoteImage.src = quoteimage;
  reviewQuoteImage.classList.add("review-quote-image");
  const review1Text = document.createElement("p");
  review1Text.textContent = `You have to try this! I've been to many Italian Restaurants in my life but this one is special. Amazing food, super friendly staff and a great Athomsphere. You can tell they are proud of their history. 5 out of 5 Stars.`;
  review1Wrapper.appendChild(review1Userimage);
  review1Wrapper.appendChild(review1Username);
  review1Wrapper.appendChild(fiveStarsImage);
  review1Wrapper.appendChild(reviewQuoteImage);
  review1Wrapper.appendChild(review1Text);
  reviewsMainWrapper.appendChild(review1Wrapper);
  content.appendChild(reviewsMainWrapper);
}

export default function reviews() {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  const menuButton = document.querySelector("#menu-button");
  const aboutButton = document.querySelector("#about-button");

  content.innerHTML = "";
}
