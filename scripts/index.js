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

const ProfileEditBtn = document.querySelector(".profile__edit-button");
const ProfileEditModal = document.querySelector(".modal");
const ProfileTitleName = document.querySelector(".profile__title");
const ProfileTitleDescription = document.querySelector(".profile__description");
const ProfileTitleNameInput = document.querySelector("#Profile__Title-Input");
const ProfileTitleDescriptionInput = document.querySelector(
  "#Profile__Description-Input"
);
const CardList = document.querySelector(".card__list");

function closepopup() {
  ProfileEditModal.classList.remove("modal__open");
}

const ProfileEditForm = ProfileEditModal.querySelector(".modal__form");
ProfileEditBtn.addEventListener("click", () => {
  ProfileEditModal.classList.add("modal__open");
  ProfileTitleNameInput.value = ProfileTitleName.textContent;
  ProfileTitleDescriptionInput.value = ProfileTitleDescription.textContent;
});
const ProfileModalCloseBtn = document.querySelector(".modal__close");
ProfileModalCloseBtn.addEventListener("click", () => {
  closepopup();
});

ProfileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  ProfileTitleName.textContent = ProfileTitleNameInput.value;
  ProfileTitleDescription.textContent = ProfileTitleDescriptionInput.value;
  closepopup();
});

const CardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
initialCards.forEach((CardData) => {
  // clone the template element with all its content and store it in a cardElement variable
  const CardElement = CardTemplate.cloneNode(true);
  // access the card title and image and store them in variables
  const CardImageEl = CardElement.querySelector(".card__image");
  const CardTitleEl = CardElement.querySelector(".card__title");
  // set the path to the image to the link field of the object
  const CardLinkEl = CardElement.QuerySelector(".card__link");
  // set the image alt text to the name field of the object
  // set the card title to the name field of the object, too
  const textContent = CardData.name;
  // return the ready HTML element with the filled-in data
  CardList.append(CardElement);
});
