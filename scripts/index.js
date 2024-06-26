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

console.log(likeButtons.length); // To check the number of buttons selected

likeButtons.forEach((likeButton) => {
  console.log(likeButton); // To ensure we are selecting the correct elements
  likeButton.addEventListener("click", () => {
    console.log("test");
  });
});

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
  profileEditModal.classList.add("modal_open");
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

  return cardElement;
}

const cardList = document.querySelector(".cards__list");
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  cardList.prepend(cardElement);
});
