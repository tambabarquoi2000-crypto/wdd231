const params = new URLSearchParams(window.location.search);

console.log(params.get("fname"));

const msg = document.querySelector("#info");


msg.innerHTML = `

    <p>Name: ${params.get("fname")} ${params.get("lname")}</p>
    <p>Organization Title: ${params.get("orgtitle")}</p>
    <p>Email: ${params.get("email")}</p>
    <p>Phone: ${params.get("phone")}</p>
    <p>Business Name: ${params.get("bname")}</p>
    <p>Registration Date: ${params.get("timestamp")}

`
