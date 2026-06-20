const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navs");


function openMenu()
{
    menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("clicked");
    navigation.classList.toggle("open");
    }
)
}

openMenu();


