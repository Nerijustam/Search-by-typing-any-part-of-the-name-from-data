import get from "./getElement.js";

const loading = get(".loading");

export const showLoading = () => {
  loading.classList.remove("hide-loading");
};

export const hideLoading = () => {
  loading.classList.add("hide-loading");
};

// Targeting that particular element by defalt, once we start fetching for the drinks, we show loading (fetchDrinks.js), but then once get drinks back, which is going to be in Diplaydrinks.js, then regardless ot whether the answer is incorrect, meaning did not get any drinks of if would want display drinks, going to hide my loading component, so now what happens ins that it's only displayed when fetching the data.
