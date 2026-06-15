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
            imgCont.setAttribute("class", "img-cnt");
            const img = document.createElement("img");
            img.setAttribute("loading", "loading");
            img.setAttribute("src", `${dealer.imgUrl}`);
            img.setAttribute("alt", `product of dealer: ${dealer.name}`)
            img.setAttribute("width", "300");
            img.setAttribute("height", "200");
            imgCont.appendChild(img);
            imgCont.appendChild(img) // Place image in its parent container

            const div = document.createElement("div"); // Seller Details and WhatsApp container
            div.setAttribute("class", "details-cnt");

            const deatails = document.createElement("div");
            deatails.innerHTML = 
            `
                <p>Seller: ${dealer.name}</p>
                <p>${dealer.status}</p>
                <p class="location">${dealer.location}</p>

            `
            const whatsApp = document.createElement("a");
            whatsApp.setAttribute("href", `${dealer.whatsapp}`);
            whatsApp.setAttribute("class", "whatsapp");
            whatsApp.innerHTML = "WhatsApp"

            div.appendChild(deatails);  // Place child deatail in parent (div)
            div.appendChild(whatsApp) // Place child whatsApp in parent (div)

            const viewButton = document.createElement("button");
            viewButton.setAttribute("type", "button");
            viewButton.innerHTML = "View More";

            viewButton.addEventListener("click", 
                () => {
                    const modal = document.querySelector("#my-modal");
                    const closeModal = document.createElement("button");
                    closeModal.textContent = "❌";
                    const info = document.createElement("p");
                    info.textContent = "This page is under construction. Nothing in viewmore for now.";

                    modal.textContent = "";
                    modal.appendChild(info);
                    modal.appendChild(closeModal);
                    
                    modal.showModal();
                    closeModal.addEventListener("click", () => modal.close());
                }
            )

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
    
    
    



function generateRandIndex(range, genIndexList=[])
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


export {displayRandomDealers, generateRandIndex};