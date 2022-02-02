const btnAngleDown=document.querySelector('.fa-angle-down');
const responsiveSideBar=document.querySelector('.sidebar-items');
function toggleSidebar(){
    if(  responsiveSideBar.style.display== "flex"){
    responsiveSideBar.style.display="none";
    }else{
        responsiveSideBar.style.display="flex";
    }
}
btnAngleDown.addEventListener('click',toggleSidebar);