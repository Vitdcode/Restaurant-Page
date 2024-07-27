import fivestarimage from "../src/images/5stars.png";
import user1image from "../src/images/profilePics/profile-pic1.png";
import user2image from "../src/images/profilePics/profile-pic2.png";
import user3image from "../src/images/profilePics/profile-pic3.png";
import user4image from "../src/images/profilePics/profile-pic4.png";
const content = document.querySelector("#content");

export function reviews(reviewWrapper) {
  const reviewsMainWrapper = document.createElement("div");
  reviewsMainWrapper.classList.add("reviews-main-wrapper");
  //review 1
  const review1Wrapper = document.createElement("div");
  review1Wrapper.classList.add("review-wrapper-1");

  const review1Userimage = document.createElement("img");
  review1Userimage.src = user1image;
  review1Userimage.classList.add("review-user-image");

  const review1Username = document.createElement("p");
  review1Username.textContent = "Mike1990";

  const fiveStarsImage = document.createElement("img");
  fiveStarsImage.src = fivestarimage;
  fiveStarsImage.classList.add("five-stars-image");

  const review1Text = document.createElement("p");
  review1Text.textContent = `You have to try this! I've been to many Italian Restaurants in my life but this one is special. Amazing food, super friendly staff and a great Athomsphere. You can tell they are proud of their history. 5 out of 5 Stars.`;

  review1Wrapper.appendChild(review1Userimage);
  review1Wrapper.appendChild(review1Username);
  review1Wrapper.appendChild(fiveStarsImage);
  review1Wrapper.appendChild(review1Text);

  reviewsMainWrapper.appendChild(review1Wrapper);

  //review 2
  const review2Wrapper = document.createElement("div");
  review2Wrapper.classList.add("review-wrapper-1");

  const review2Userimage = document.createElement("img");
  review2Userimage.src = user2image;
  review2Userimage.classList.add("review-user-image");

  const review2Username = document.createElement("p");
  review2Username.textContent = "Alex93";

  const fiveStarsImage2 = document.createElement("img");
  fiveStarsImage2.src = fivestarimage;
  fiveStarsImage2.classList.add("five-stars-image");

  const review2Text = document.createElement("p");
  review2Text.textContent = `The menu said Spaghetti with delicious Meatballs... well these are the most delicious Meatballs I ever had so they weren't lying. Shame I ain't living here because if I did I would eat here every week. Really great place.`;

  review2Wrapper.appendChild(review2Userimage);
  review2Wrapper.appendChild(review2Username);
  review2Wrapper.appendChild(fiveStarsImage2);
  review2Wrapper.appendChild(review2Text);

  reviewsMainWrapper.appendChild(review2Wrapper);

  //review 3
  const review3Wrapper = document.createElement("div");
  review3Wrapper.classList.add("review-wrapper-1");

  const review3Userimage = document.createElement("img");
  review3Userimage.src = user3image;
  review3Userimage.classList.add("review-user-image");

  const review3Username = document.createElement("p");
  review3Username.textContent = "Anna-from-Austria";

  const fiveStarsImage3 = document.createElement("img");
  fiveStarsImage3.src = fivestarimage;
  fiveStarsImage3.classList.add("five-stars-image");

  const review3Text = document.createElement("p");
  review3Text.textContent = `Came to this Restaurant because of the great reviews and I wasn't dissapointed. This place is awesome. Food is really great.`;

  review3Wrapper.appendChild(review3Userimage);
  review3Wrapper.appendChild(review3Username);
  review3Wrapper.appendChild(fiveStarsImage3);
  review3Wrapper.appendChild(review3Text);

  reviewsMainWrapper.appendChild(review3Wrapper);

  //review 4
  const review4Wrapper = document.createElement("div");
  review4Wrapper.classList.add("review-wrapper-1");

  const review4Userimage = document.createElement("img");
  review4Userimage.src = user4image;
  review4Userimage.classList.add("review-user-image");

  const review4Username = document.createElement("p");
  review4Username.textContent = "Paul-the-food-lover";

  const fiveStarsImage4 = document.createElement("img");
  fiveStarsImage4.src = fivestarimage;
  fiveStarsImage4.classList.add("five-stars-image");

  const review4Text = document.createElement("p");
  review4Text.textContent = `If I could only go to one Restaurant for the rest of my life this one would be it. It's the best I've been to and I've been to a lot.`;

  review4Wrapper.appendChild(review4Userimage);
  review4Wrapper.appendChild(review4Username);
  review4Wrapper.appendChild(fiveStarsImage4);
  review4Wrapper.appendChild(review4Text);

  reviewsMainWrapper.appendChild(review4Wrapper);

  content.appendChild(reviewsMainWrapper);
}
