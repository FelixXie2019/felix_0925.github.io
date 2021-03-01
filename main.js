const button = document.querySelector(".js-sign-in");
const screen = document.querySelector(".js-modal-screen");
const page = document.querySelector("body");

button.addEventListener("click", function () {
  page.classList.toggle("modal-open");
  
});

screen.addEventListener("click", function () {
  page.classList.remove("modal-open");
});