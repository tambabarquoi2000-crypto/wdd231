const dealers = "./data/dealers.json";

async function displayRandomDealers(disObj) 
{
    
    try
    {
        const response = await fetch(dealers);

        if(response.ok)
        {
            const data = await response.json();
            const dealersArr = data.dealers;

            //  Filter dealers for promotion

            const filteredArr = dealersArr.filter(dealer => dealer.isOnPromo == true
            )

            const fourRandDealers = getSpecRandItem(filteredArr, 4);

            // Create card for each item

            fourRandDealers.forEach(
                (dealer) =>
                {
            
            const card = document.createElement("div"); // Card Container
            card.setAttribute("class", "card");

            const imgCont = document.createElement("div"); // Image container
            imgCont.setAttribute("class", "card-img");
            const img = document.createElement("img");
            img.setAttribute("loading", "loading");
            img.setAttribute("src", `${dealer.imgUrl}`);
            img.setAttribute("alt", `product of dealer: ${dealer.name}`)
            img.setAttribute("width", "100");
            img.setAttribute("height", "100");
            imgCont.appendChild(img);
            imgCont.appendChild(img) // Place image in its parent container

            const div = document.createElement("div"); // Seller Details and WhatsApp container

            const deatails = document.createElement("div");
            deatails.innerHTML = 
            `
                <p>Seller: ${dealer.name}</p>
                <p>${dealer.status}</p>
                <p class="location">${dealer.location}</p>

            `
            const whatsApp = document.createElement("a");
            whatsApp.setAttribute("href", `${dealer.whatsapp}`);
            whatsApp.innerHTML = "WhatsApp"

            div.appendChild(deatails);  // Place child deatail in parent (div)
            div.appendChild(whatsApp) // Place child whatsApp in parent (div)

            const viewButton = document.createElement("button");
            viewButton.setAttribute("type", "button");
            viewButton.innerHTML = "View More";

            viewButton.addEventListener("click", () => console.log("This button is clicked!"))

            // Place all elements created in the card created

            card.appendChild(imgCont);
            card.appendChild(div);
            card.appendChild(viewButton);

            disObj.appendChild(card);   // Place each card created in the section object
            
                }
            )

    

        }
    }


    catch (error) 
    {
        console.log(error);
        console.log("This catch block is working.")
    }
}
    
    
    



function generateRandIndex(range, genIndexList)
    {
        let index = Math.floor(Math.random() * range);

        if(genIndexList.includes(index))
        {
            index = generateRandIndex(range, genIndexList)
        }

        else
        {
            genIndexList.push(index)
        }

        return index;
    }

    function getSpecRandItem (listArr, maxItem=1)
{
    const arr = [];
    const generatedIndexes = []
    // let index;

    for(let i=0; i < maxItem; i++)
    {
        const randIndex = generateRandIndex(listArr.length, generatedIndexes);
        arr.push(listArr[randIndex])
        // console.log(`Random Index ${randIndex}`);
        // console.log(arr);
    }

    return arr;
}


export {displayRandomDealers};