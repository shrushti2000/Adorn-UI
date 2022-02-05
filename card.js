const cardCloseBtn = document.querySelector(".card-close-btn");
const cardContainer = document.querySelector(".card__container-close");
function dismissCard() {
  cardContainer.style.display = "none";
}
cardCloseBtn.addEventListener("click", dismissCard);
