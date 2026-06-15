const param = new URLSearchParams(window.location.search);

const succMsgCont = document.querySelector("#succ-msg");

// succMsgCont.textContent = "";

const msg = document.createElement("h1");

msg.textContent = "Successful";
const email = document.createElement("p");
email.textContent = `Email: ${param.get("email")}`;
const password = document.createElement("p");
password.textContent = `Password: ${param.get("password")}`;

succMsgCont.appendChild(msg);
if(param.get("fname") || param.get("lname"))
{
    const fullName = document.createElement("p");
    fullName.textContent = `Full Name: ${param.get("fname")} ${param.get("lname")}`;
    succMsgCont.appendChild(fullName);
}
succMsgCont.appendChild(email);
succMsgCont.appendChild(password);

