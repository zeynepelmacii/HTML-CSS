let menu = document.querySelector('#menuIcon');
let navBar = document.querySelector('.navBar');

menu.addEventListener("click", function () {
    navBar.classList.toggle("active");
});

window.onscroll = () => {
    navBar.classList.remove("active");
};