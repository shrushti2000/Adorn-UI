const alertBox=document.querySelector('.alert-box');
const closeAlertBtn=document.querySelectorAll('.close-alert');
function closeAlert(event){
    console.log(event.target.parentNode)
    event.target.parentNode.style.display="none";
}
for(let i=0;i<closeAlertBtn.length;i++){
    closeAlertBtn[i].addEventListener('click',closeAlert)
}
console.log(closeAlertBtn)