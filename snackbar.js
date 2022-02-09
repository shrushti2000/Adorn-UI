const btnBaseline = document.querySelector('.btn-baseline')
const btnLeading = document.querySelector('.btn-leading')
const btnBaseLineClose = document.querySelector('.close-icon-baseline')
const btnLeadingClose = document.querySelector('.close-icon-leading')
let snackBar;
// baseline snackbar 
function showBaselineSnackBar() {
    console.log('clicked')
    snackBar = document.querySelector('.snackbar__container--baseline');
    console.log(snackBar.style.visibility.value)
    snackBar.style.visibility = "visible";
    setTimeout(() => {
        snackBar.style.visibility = "hidden";
    }, 3000)
}
function closeBaseLineSnackBar() {
    console.log(' baseline close clicked')
    snackBar.style.visibility = "hidden";
}
// leading snackbar
function showLeadingSnackBar() {
    snackBar = document.querySelector('.snackbar__container--leading');
    console.log(snackBar.style.visibility.value)
    snackBar.style.visibility = "visible";
    setTimeout(() => {
        snackBar.style.visibility = "hidden";
    }, 3000)
}
function closeLeadingSnackBar() {
    console.log('leading clicked')
    snackBar.style.visibility = "hidden";
}
btnBaseline.addEventListener('click', showBaselineSnackBar)
btnLeading.addEventListener('click', showLeadingSnackBar)
btnBaseLineClose.addEventListener('click', closeBaseLineSnackBar)
btnLeadingClose.addEventListener('click', closeLeadingSnackBar)
