const elContainer = document.querySelector(".container");

function renderFn(array, parent) {
  parent.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "18rem";
    newCard.innerHTML = `<div class=" ">
    <img src="${element.img}" class="card-img-top" alt="..." width="160" height="260" />
          <div class="card-body; d-flex justify-content-between ">
            <div>
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">
            ${element.type}
            </p>          
            <p class="card-text">
            ${element.spawn_time}
            </p>
            </div>
            <div class="">
            <img  data-id="${element.id}" id="delete-icon" width="30" src = "./images/icon.png">
            </div>
          </div>
          </div>
    `;
    parent.appendChild(newCard);
  }
}

renderFn(card, elContainer);

elContainer.addEventListener("click", function (evt) {
  if (evt.target.id === "delete-icon") {
    const id = Number(evt.target.dataset.id);
    const newCard2 = [];

    for (let i = 0; i < card.length; i++) {
      const element = card[i];
      if (element.id !== id) {
        newCard2.push(element);
      }
    }
    card = newCard2;
    renderFn(card, elContainer);
  }
});
renderFn(card, elContainer);

function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const elInput = getElement(".header__input");
const elInputBtn = getElement(".header__button");
const elForm = getElement(".header__form");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newArray = [];

  for (let i = 0; i < card.length; i++) {
    const element = card[i];
    if (element.name.toLowerCase().includes(elInput.value.toLowerCase())) {
      newArray.push(element);
    }
  }
  elForm.reset();
  renderFn(newArray, elContainer);
});
