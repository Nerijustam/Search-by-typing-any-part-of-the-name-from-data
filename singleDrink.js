import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

// this singleDrink.js is going to rur when we open up the drink html

// when the DOM content load, then want to run my callBack function
const presentDrink = async () => {
  // Get the drink item
  const id = localStorage.getItem("drink");
  // if that id is not in a local storage (Item is not there), then just want to navigate back to index.html
  if (!id) {
    window.location.replace("index.html");
  } else {
    // Once the content loads , want to fetch for drink. And after this, add id
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);
