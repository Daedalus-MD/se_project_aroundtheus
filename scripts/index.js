const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditBtn = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit_modal");
const profileTitleName = document.querySelector(".profile__title");
const profileTitleDescription = document.querySelector(".profile__description");
const profileTitleNameInput = document.querySelector("#Profile__Title-Input");
const profileTitleDescriptionInput = document.querySelector(
  "#Profile__Description-Input"
);

const addnewcardButton = document.querySelector(".profile__add-button");

const likeButtons = document.querySelectorAll(".card__like-button");

const cardAddBtn = document.querySelector(".card__add-button");
const cardEditModal = document.querySelector("#image_modal");
const cardTitleName = document.querySelector(".modal__form-title");
const cardTitleDescription = document.querySelector(".modal__form-description");
const cardTitleNameInput = document.querySelector("#card__Title-Input");
const cardTitleDescriptionInput = document.querySelector(
  "#card__Description-Input"
);

console.log(likeButtons.length); // To check the number of buttons selected

function closePopup() {
  profileEditModal.classList.remove("modal_open");
}

const profileEditForm = profileEditModal.querySelector(".modal__form");

profileEditBtn.addEventListener("click", () => {
  profileEditModal.classList.add("modal_open");
  profileTitleNameInput.value = profileTitleName.textContent;
  profileTitleDescriptionInput.value = profileTitleDescription.textContent;
});

addnewcardButton.addEventListener("click", () => {
  cardEditModal.classList.add("modal_open");
  profileTitleNameInput.value = profileTitleName.textContent;
  profileTitleDescriptionInput.value = profileTitleDescription.textContent;
});

const profileModalCloseBtn = document.querySelector(".modal__close");
profileModalCloseBtn.addEventListener("click", () => {
  closePopup();
  console.log("test");
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitleName.textContent = profileTitleNameInput.value;
  profileTitleDescription.textContent = profileTitleDescriptionInput.value;
  closePopup();
});
function createCard(cardData) {
  const cardTemplate =
    document.querySelector("#card-template").content.firstElementChild;
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__description");

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    if (
      likeButton.style.backgroundImage === 'url("../images/like-button.svg")'
    ) {
      likeButton.style.backgroundImage = 'url("../images/Union.svg")';
    } else {
      likeButton.style.backgroundImage = 'url("../images/like-button.svg")';
    }
  });
  return cardElement;
}

const cardList = document.querySelector(".cards__list");
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  cardList.prepend(cardElement);
});
