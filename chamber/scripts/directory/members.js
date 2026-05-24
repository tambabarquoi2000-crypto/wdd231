// Card Elements
const cards = document.querySelector("#business-cards");
const url = "./data/members.json";

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

getBusiness(url, "grid");

gridButton.addEventListener("click", () => {
    getBusiness(url, "grid")
})

listButton.addEventListener("click", () => {
    getBusiness(url, "list")
})





// Async functions fetch function for getting data from a server
async function getBusiness(url, dsptype) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses)

    if (dsptype == "grid") {
        displayBusinessGrid(data.businesses)
    }
    
    else {
        displayBusinessTable(data.businesses)
    }
}


// Display Card function for displaying cards on a webpage
function displayBusinessGrid (businessArr) {
    // create a special container to house all the cards that is going into the cards container
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "business-card");

    businessArr.forEach((business) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card")
        let businessName = document.createElement("h2");
        let imageContainer = document.createElement("div");
        imageContainer.setAttribute("class", "image-container")
        let businessImage = document.createElement("img");
        let contactInformation = document.createElement("div");

        businessName.textContent = business.companyName;
        businessImage.setAttribute("src", business.image);
        businessImage.setAttribute("alt", `${business.companyName} office image`);
        businessImage.setAttribute("loding", "lazy");
        businessImage.setAttribute("width", "250");
        businessImage.setAttribute("height", "250");

        contactInformation.innerHTML = `
        <div class="contact-info">
        <p>EMAIL: ${business.email}</p>
        <p>PHONE: ${business.companyPhoneNumber}</p>
        <p>URL: ${business.companyUrl}</p>
        </div>
        `
        imageContainer.appendChild(businessImage);
        card.appendChild(businessName);
        card.appendChild(imageContainer);
        card.appendChild(contactInformation);


        cardContainer.appendChild(card);
        
    })

    cards.innerHTML = "";
    cards.appendChild(cardContainer);
}

function displayBusinessTable(businessArr) {
    // Create a table to for the tabular data.
    const table = document.createElement("table");

    // Create a table head and set the values of each head.
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
        <th>Company Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Web Address</th>
        </tr>
    `
    const tbody = document.createElement("tbody");

    businessArr.forEach(data => {
        // Create a table row for all the data that correspond with its header.
        let tr = document.createElement("tr");
        let companyNameData = document.createElement("td");
        let companyAddressData = document.createElement("td");
        let companyNumberData = document.createElement("td");
        let companyWebData = document.createElement("td");

        // Initalize all table data to their respective data.

        companyNameData.textContent = data.companyName;
        companyAddressData.textContent = data.companyAddress;
        companyNumberData.textContent = data.companyPhoneNumber;
        companyWebData.textContent = data.companyUrl;

        tr.appendChild(companyNameData);
        tr.appendChild(companyAddressData);
        tr.appendChild(companyNumberData);
        tr.appendChild(companyWebData);

        tbody.appendChild(tr);
    })

    table.appendChild(thead);
    table.appendChild(tbody);

    cards.innerHTML = "";
    cards.appendChild(table);

}