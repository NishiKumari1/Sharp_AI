function showLoadingPopup() {
    document.getElementById('loadingPopup').style.display = 'flex';
}
// Function to hide the loading popup
function hideLoadingPopup() {
    document.getElementById('loadingPopup').style.display = 'none';
}
// Function to hide the loading popup after the page has finished reloading
window.onload = function () {
    hideLoadingPopup();
};