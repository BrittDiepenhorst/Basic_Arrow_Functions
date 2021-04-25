const animalSpotted = event => {
    console.log("Spotted:", event.target.textContent);
    const spottedAnimal = event.target.textContent;
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(spottedAnimal));
    const spottedList = document.getElementById("spotted-animals-list");
    spottedList.appendChild(listItem);
};

const removeFirstItem = () => {
    const firstItem = document.getElementById("spotted-animals-list").firstChild;
    firstItem.remove();
};

const removeAll = () => {
    const spottedAnimalsList = document.getElementById("spotted-animals-list");
    // spottedAnimalsList.innerHTML = "";
    spottedAnimalsList.querySelectorAll("*").forEach(s => s.remove());
};

document.addEventListener("DOMContentLoaded", function () {
    const bigFiveButtons = document.querySelectorAll(".big-five-button");
    bigFiveButtons.forEach(function (bigFiveButton) {
        bigFiveButton.addEventListener("click", animalSpotted);
    });

    const removeFirstItemButton = document.getElementById("remove-first-item-button");
    removeFirstItemButton.addEventListener("click", removeFirstItem);

    const removeAllButton = document.getElementById("remove-all-button");
    removeAllButton.addEventListener("click", removeAll);

});