const successToastBtn = document.querySelector('.success-toast-btn');
const errorToastBtn = document.querySelector('.error-toast-btn')
const toastContainerSuccess = document.querySelector("#toast__container-success")
const toastContainerError = document.querySelector("#toast__container-error")
const SuccessToastCloseBtn = document.querySelector(".close-toast-success");
const ErrorToastCloseBtn = document.querySelector(".close-toast-error");

const openSuccessToast = () => {
    toastContainerSuccess.style.visibility = "visible";
    setTimeout(()=>{
        toastContainerSuccess.style.visibility = "hidden";
    },3000)
}
const openErrorToast = () => {
    toastContainerError.style.visibility = "visible";
    setTimeout(()=>{
        toastContainerError.style.visibility = "hidden";
    },3000)
}
const closeSuccessToast = () => {
    toastContainerSuccess.style.visibility = "hidden";
   
}
const closeErrorToast = () => {
    toastContainerError.style.visibility = "hidden";
}

successToastBtn.addEventListener('click', openSuccessToast)
errorToastBtn.addEventListener('click', openErrorToast)
SuccessToastCloseBtn.addEventListener('click', closeSuccessToast)
ErrorToastCloseBtn.addEventListener('click', closeErrorToast)