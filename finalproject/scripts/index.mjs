import {setCurrentYear, setLastModified} from "./date.mjs";
import {displayRandomPromo} from "./sponsor.mjs";
import { displayRandomDealers } from "./dealers.mjs";

const currentYear = document.querySelector("#current-year");
setCurrentYear(currentYear);

const sponsor = document.querySelector("#sponsor");
displayRandomPromo(sponsor);

const dealersSection = document.querySelector("#bsl-dealers");
displayRandomDealers(dealersSection);
