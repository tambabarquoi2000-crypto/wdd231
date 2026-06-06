const sponsor = 
[
    {
        store: "Eagle Electrical Corp",
        item: "Jig Saw",
        model: 2025,
        imgUrl: "",
        promo: "Introducing Eagle's Newest",
        discount: 50
    },
    {
        store: "Seti Brothers",
        item: "Glue Gun",
        model: 2025,
        imgUrl: "",
        promo: "Ultimate Deals",
        discount: 10
    },
    {
        store: "Shop ShowRoom",
        item: "iPhone 17",
        model: 2025,
        imgUrl: "",
        promo: "Big Sale",
        discount: 40
    },
    {
        store: "Source IT",
        item: "Samsung Galaxy S9",
        model: 2014,
        imgUrl: "",
        promo: "Last in stock",
        discount: 45
    }
]

let numOfIteration = 0; 
const arrLength = sponsor.length;
let iterationIndex = [];

// display random item after every 2 mins

async function displayRandomPromo(disObj) 
{

    let index = generateRandomNum(arrLength, iterationIndex);
    const objToDisplay = sponsor[index];

        disObj.innerHTML = 
        `
            <div>
                <p>${objToDisplay.promo}</p>
                <p>${objToDisplay.item}: Get ${objToDisplay.discount}% discount on each purchase</p>
            </div>

            <div>
                <img src="${objToDisplay.imgUrl}" alt="Image of ${objToDisplay.item}">
            </div>

            <div>
            <p>${objToDisplay.store}</p>
            </div>

            <div>
                <button type="button" id="promo-shopNow">Shop Now</button>.
            </div>
        `

        setTimeout(() => 
            {
                // Rest number of iteration to have an endless loop

                if(numOfIteration == arrLength)
                {
                    numOfIteration = 0;
                    iterationIndex = []
                }
               
                    displayRandomPromo(disObj);
               
            }, 20000);
    }


function generateRandomNum(range, numsGenerated)
{
    let randNum = Math.floor(Math.random() * range);
    if((numsGenerated.includes(randNum) & numOfIteration < range))
    {
        randNum = generateRandomNum(range, numsGenerated)
        
    }
    else 
    {
        iterationIndex.push(randNum);
        numOfIteration ++; 
    }

    return randNum;
}

export {displayRandomPromo, generateRandomNum}
