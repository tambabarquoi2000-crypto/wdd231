import {places} from "../scripts/places.mjs";
import { processLocalStorage } from "./local-storage.mjs";

processLocalStorage();

// initialize display elements
        const cardHolder = document.querySelector("#places");


places.forEach(
    (place) =>
    {
        // create card for each place
        const card = document.createElement("div");
        card.setAttribute("class", "dis-card");


        // create card elements
        const h2 = document.createElement("h2");
        const figure = document.createElement("figure");
        const address = document.createElement("address");
        const paraPrice = document.createElement("p");
        const paraDisc = document.createElement("p");
        const button = document.createElement("button")


        const img = document.createElement("img");
        img.setAttribute("src", place.imgUrl);
        img.setAttribute("alt", `image of ${place.name}`);
        place.imgUrl == "images/skd.webp"? img.setAttribute("fetchpriority", "high") : img.setAttribute("loading", "lazy");
        // img.setAttribute("loading", "lazy");
        img.setAttribute("width", "300");
        img.setAttribute("height", "200");

        h2.textContent = place.name;
        figure.appendChild(img);
        address.textContent = place.address;
        paraDisc.textContent = place.description;
        button.textContent = "Learn More";

        card.appendChild(h2);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(paraDisc);
        card.appendChild(button);

        cardHolder.appendChild(card);

    }
)