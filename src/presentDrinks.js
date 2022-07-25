import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);
  // display drinks
  const section = await displayDrinks(data);
  // if the section is not undefined, then I would want to run my set drink and just pass in that section
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
