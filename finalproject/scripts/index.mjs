import {setCurrentYear, setLastModified} from "./date.mjs";
import {displayRandomPromo} from "./sponsor.mjs";
import { displayRandomDealers } from "./dealers.mjs";
import { displayRandomHotDeal } from "./hot-deals.mjs";
import {openMenu} from "./menu.mjs";
import { processLocalStorage } from "../../chamber/scripts/local-storage.mjs";

// --- Run open menu for menu button functionality ---
openMenu();


// --- Current Year ---
const currentYear = document.querySelector("#current-year");
setCurrentYear(currentYear);

// --- Sponsor ---

console.log(location.pathname);

if(location.pathname == "/finalproject/index.html")
{
    const sponsor = document.querySelector("#sponsor");
    displayRandomPromo(sponsor);


// --- Dealers ---

    const dealersSection = document.querySelector("#bsl-dealers");
    displayRandomDealers(dealersSection);

    // --- Hot Deals ---
    const hotDeal = document.querySelector("#hot-deal");
    displayRandomHotDeal(hotDeal);


    const wlcMsg = document.querySelector("#wlc-msg");
    const div = document.createElement("div");
    div.setAttribute("class", "msg");
    wlcMsg.appendChild(div);
    processLocalStorage(div);

}
