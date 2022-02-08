const openBtn = document.querySelector(".modal-open-btn");
const closeBtn = document.querySelector(".modal-close-btn");
var modal = document.querySelector(".modal-overlay");
function openModal() {
  modal.classList.add("display");
}
function closeModal() {
  modal.classList.remove("display");
}
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
