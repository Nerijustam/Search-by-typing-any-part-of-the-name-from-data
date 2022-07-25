import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// Want to select 2 thing. I would want to select a form and add eventListener (This is not going to be for form submission) In fact, going to be for key up event. Second thong is this name attribute
const form = get(".search-form");
// Going to use attribute selector, where going to say: get me the attribute that has the mane of drink
const input = get('[name="drink"]');

// keyup event is the name of the event
form.addEventListener("keyup", function (e) {
  // First thing what to do as far as the form, to prevent the default
  e.preventDefault();
  const value = input.value;
  // if the value is false, when just return
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
