const hamburger = document.querySelector("#nav-button");
const pageNavigation = document.querySelector("#nav-bar");

hamburger.addEventListener("click", () => {
    pageNavigation.classList.toggle("show");
    hamburger.classList.toggle("show");
})

