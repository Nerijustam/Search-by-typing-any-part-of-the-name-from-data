import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  // Check what is the value is for drinks
  if (!drinks) {
    // set up error mesage
    hideLoading();
    title.textContent = "Sorry, no drinks matched your search";
    // set up this section innerHTML there will = 0
    section.innerHTML = null;
    // If drinks not there, then return form function
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      // Return template string. And then once that is the case, going to have an array and would want to join it into one string.
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  // hide loading
  hideLoading();
  title.textContent = "";
  // going to turn the section again at the moment
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
