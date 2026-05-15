const url =  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector("#cards");



getProphets(url);



async function getProphets (url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets)
    displayProphets(data.prophets)
}

function displayProphets(prophets) 
{
    prophets.forEach(element => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let profile = document.createElement("p");
        let potrait = document.createElement("img");
        let imgContainer = document.createElement("div");

        fullName.textContent = `${element.name} ${element.lastname}`;
        profile.innerHTML = `
            <p>Date of Birth: ${element.birthdate}</p>
            <p>Place of Birth: ${element.birthplace}</p>
        `
        potrait.setAttribute("src", element.imageurl);
        potrait.setAttribute("alt", `Photo of ${fullName}`);
        potrait.setAttribute("loading", "lazy");
        potrait.setAttribute("width", "340");
        potrait.setAttribute("height", "440");

        imgContainer.setAttribute("class", "img-cont");
        imgContainer.appendChild(potrait);

        card.appendChild(fullName);
        card.appendChild(profile);
        card.appendChild(imgContainer);

        cards.appendChild(card);
    }
    
);
}






