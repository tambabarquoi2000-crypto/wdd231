const form = document.querySelector("form");
const orgTitle = document.querySelector("#org-title");

const invalidEntryMsg = document.querySelector("#msg");

const regExp = /^[A-Za-z]+( -[A-Za-z])*/;

form.addEventListener("submit", (e) => {
    
    if(!(regExp.test(orgTitle.value) && orgTitle.value.length >= 7))
    {
        e.preventDefault();
        orgTitle.classList.toggle("error");
        orgTitle.focus();
        invalidEntryMsg.textContent = "Organization Title must contain only alphabet, space or hyphen and be a minimum of 7 characters."
    }

})



