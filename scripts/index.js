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
const ProfileTitle = document.querySelector(".profile__title");
const ProfileName = document.querySelector(".Profile__Description");
const ProfileTitleName = document.querySelector("#Profile__Name-Input");
const ProfileTitleDescription = document.querySelector(
  "#Profile__Description-Input"
);
ProfileEditBtn.addEventListener("click", () => {
  ProfileEditModal.classList.add("modal__open");
});
const ProfileModalCloseBtn = document.querySelector(".modal__close");
ProfileModalCloseBtn.addEventListener("click", () => {
  ProfileEditModal.classList.remove("modal__open");
});
