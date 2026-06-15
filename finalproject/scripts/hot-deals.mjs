import { generateRandIndex } from "./dealers.mjs"

const hotDeals = [
    {
        item: "Glue Gun",
        description: "Brand New, 2024 model",
        discount: 50,
        logo: "",
        imgUrl: "images/glue-gun.webp"
    }
]

// get a random object from hot deal and create a card


// display random item on each page load

function displayRandomHotDeal(disObj) 
{
    const index = generateRandIndex(hotDeals.length);
    const objToDisplay = hotDeals[index];

        disObj.innerHTML = 
        `
            <div class="hd-details">
                <p>${objToDisplay.description}</p>
                <p>${objToDisplay.item}: Get ${objToDisplay.discount}% discount on each purchase</p>
            </div>

            <div class="hd-img-cnt">
                <img src="${objToDisplay.imgUrl}" alt="Image of ${objToDisplay.item}  width="300" height = "200"">
            </div>
            
            <div class="hd-btt-cnt">
                <button type="button" class="promo-shopNow" id="promo-shopNow">Shop Now</button>.
            </div>
        `
    }

    export {displayRandomHotDeal}