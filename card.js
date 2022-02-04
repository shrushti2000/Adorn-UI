const cardCloseBtn=document.querySelector('.close-card-btn');
const cardContainer=document.querySelector('.card__container-close');
function dismissCard(){
    cardContainer.style.display="none";
}
cardCloseBtn.addEventListener('click',dismissCard);