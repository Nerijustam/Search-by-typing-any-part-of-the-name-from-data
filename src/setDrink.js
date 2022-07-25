// if the result are correct, if the data that I'm getting back is not null, cause that was also an option, then I would want to add eventListener on that section.

const setDrink = (section) => {
  // Want to attach eventListener on the section that getting back
  section.addEventListener("click", function (e) {
    // going to prevent the default behavior of the link. Remembet, that in order to see anything,in order to set up functionality, first temporarily need to set up this preventDefault. Secon one, since the ID is on the parent
    // e.preventDefault();
    // Want to look for ID. Getting back the ID
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
