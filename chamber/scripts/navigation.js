// Variables from the directory page

const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    menu.classList.toggle("open")
})