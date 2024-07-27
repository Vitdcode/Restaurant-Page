import pastaimage1 from "../src/images/pasta1.jpg";
import pizzaimage1 from "../src/images/pizza1.jpg";
import seafoodimage1 from "../src/images/seafood.jpg";
import drinksimage1 from "../src/images/drinks.jpg";

export default function menu() {
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  const menuButton = document.querySelector("#menu-button");
  const aboutButton = document.querySelector("#about-button");

  content.innerHTML = "";

  aboutButton.style.borderBottom = "none";
  homeButton.style.borderBottom = "none";
  menuButton.style.borderBottom = "3px solid rgb(173, 23, 31)";

  const menuHeader = document.createElement("h2");
  menuHeader.classList.add("menu-header");
  menuHeader.textContent = "Menu";
  menuHeader.style.borderBottom = "3px solid rgb(173, 23, 31)";

  //pasta card
  const pastaCard = document.createElement("div");
  pastaCard.classList.add("pasta-card");
  //pasta card image
  const pastaImage = document.createElement("img");
  pastaImage.src = pastaimage1;
  //pasta card header
  const pastaHeader = document.createElement("h2");
  pastaHeader.classList.add("pasta-card-header");
  pastaHeader.textContent = "Pasta";
  //pasta card menu 1
  const traditionalSpaghetti = document.createElement("p");
  traditionalSpaghetti.textContent = "Traditional Spaghetti: 20$";
  //pasta card menu 2
  const pastaPenne = document.createElement("p");
  pastaPenne.textContent = "Penne alla Carbonara: 15$";
  //pasta card menu 3
  const pastaChicken = document.createElement("p");
  pastaChicken.textContent = "Chicken Pasta Bake: 22$";
  //pasta card menu 4
  const pastaMeatBalls = document.createElement("p");
  pastaMeatBalls.textContent = "Spaghetti with delicious Meatballs: 25$";

  //pizza card
  const pizzaCard = document.createElement("div");
  pizzaCard.classList.add("pizza-card");
  //pizza image
  const pizzaImage = document.createElement("img");
  pizzaImage.src = pizzaimage1;
  //pasta card header
  const pizzaHeader = document.createElement("h2");
  pizzaHeader.classList.add("pizza-card-header");
  pizzaHeader.textContent = "Pizza";
  //pizza card menu 1
  const pizzaNapol = document.createElement("p");
  pizzaNapol.textContent = "Pizza Napoletana: 15$";
  //pizza card menu 2
  const pizzaMarg = document.createElement("p");
  pizzaMarg.textContent = "Pizza Margherita: 15$";
  //pizza card menu 3
  const pizzaDiavola = document.createElement("p");
  pizzaDiavola.textContent = "Pizza alla diavola: 20$";
  //pizza card menu 4
  const pizzaCaprese = document.createElement("p");
  pizzaCaprese.textContent = "Caprese Pizza: 20$";

  //seafood card
  const seafoodCard = document.createElement("div");
  seafoodCard.classList.add("seafood-card");
  //seafood image
  const seafoodImage = document.createElement("img");
  seafoodImage.src = seafoodimage1;
  //pasta card header
  const seafoodHeader = document.createElement("h2");
  seafoodHeader.classList.add("seafood-card-header");
  seafoodHeader.textContent = "Seafood";
  //pizza card menu 1
  const lobsterRis = document.createElement("p");
  lobsterRis.textContent = "Lobster Risotto: 25$";
  //pizza card menu 2
  const shrimpSpaghetti = document.createElement("p");
  shrimpSpaghetti.textContent = "Grilled Shrimp with Spaghetti: 20$";
  //pizza card menu 3
  const seafoodStew = document.createElement("p");
  seafoodStew.textContent = "Italian Seafood Stew: 25$";
  //pizza card menu 4
  const fishPiccata = document.createElement("p");
  fishPiccata.textContent = "Monkfish Piccata: 25$";

  //drinks card
  const drinksCard = document.createElement("div");
  drinksCard.classList.add("drinks-card");
  //drinks image
  const drinksImage = document.createElement("img");
  drinksImage.src = drinksimage1;
  //drinks card header
  const drinksHeader = document.createElement("h2");
  drinksHeader.classList.add("drinks-card-header");
  drinksHeader.textContent = "Drinks";
  //drinks card menu 1
  const coke = document.createElement("p");
  coke.textContent = "Coke 250ml: 2,50$";
  //drinks card menu 2
  const orangeJuice = document.createElement("p");
  orangeJuice.textContent = "Orange Juice 250ml: 2,50$";
  //drinks card menu 3
  const beer = document.createElement("p");
  beer.textContent = "Beer 300ml: 3$";
  //drinks card menu 4
  const summerCocktail = document.createElement("p");
  summerCocktail.textContent = "Summer Cocktail: 5$";

  pastaCard.appendChild(pastaImage);
  pastaCard.appendChild(pastaHeader);
  pastaCard.appendChild(traditionalSpaghetti);
  pastaCard.appendChild(pastaPenne);
  pastaCard.appendChild(pastaChicken);
  pastaCard.appendChild(pastaMeatBalls);

  pizzaCard.appendChild(pizzaImage);
  pizzaCard.appendChild(pizzaHeader);
  pizzaCard.appendChild(pizzaNapol);
  pizzaCard.appendChild(pizzaMarg);
  pizzaCard.appendChild(pizzaDiavola);
  pizzaCard.appendChild(pizzaCaprese);

  seafoodCard.appendChild(seafoodImage);
  seafoodCard.appendChild(seafoodHeader);
  seafoodCard.appendChild(lobsterRis);
  seafoodCard.appendChild(shrimpSpaghetti);
  seafoodCard.appendChild(seafoodStew);
  seafoodCard.appendChild(fishPiccata);

  drinksCard.appendChild(drinksImage);
  drinksCard.appendChild(drinksHeader);
  drinksCard.appendChild(coke);
  drinksCard.appendChild(orangeJuice);
  drinksCard.appendChild(beer);
  drinksCard.appendChild(summerCocktail);

  content.appendChild(menuHeader);
  content.appendChild(pastaCard);
  content.appendChild(pizzaCard);
  content.appendChild(seafoodCard);
  content.appendChild(drinksCard);
}
