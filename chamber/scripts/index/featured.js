const featuredBusinesses = document.querySelector("#featured-business");
const jsonurl = "./data/members.json";


getBusiness(jsonurl);

async function getBusiness(url) 
{

    const response = await fetch(url);
    const data = await response.json();

    displayFeaturedBusiness(data.businesses, 3);
    
}

function displayFeaturedBusiness(busArr, numofBusiness)
{
    const selectedRanNums = [];

    for(let x=0; x < numofBusiness; x++) 
        {
            
            getElitBusiness();

            function getElitBusiness() 
            {
                let randIndex = getRandomNumber(busArr.length);
                let businessobj = busArr[randIndex];

            if((!selectedRanNums.includes(randIndex) & (businessobj.memberShipLevel=="bronze" || businessobj.memberShipLevel=="gold")))
            {
                // display featured business
                let card = document.createElement("div");
                card.setAttribute("class", "card")
                let businessName = document.createElement("h2");
                let imageContainer = document.createElement("div");
                imageContainer.setAttribute("class", "image-container")
                let businessImage = document.createElement("img");
                let contactInformation = document.createElement("div");

                businessName.textContent = businessobj.companyName;
                businessImage.setAttribute("src", businessobj.image);
                businessImage.setAttribute("alt", `${businessobj.companyName} office image`);
                businessImage.setAttribute("loding", "lazy");
                businessImage.setAttribute("width", "250");
                businessImage.setAttribute("height", "250");

                contactInformation.innerHTML = `
                <div class="contact-info">
                <p>EMAIL: ${businessobj.email}</p>
                <p>PHONE: ${businessobj.companyPhoneNumber}</p>
                <p>URL: ${businessobj.companyUrl}</p>
                </div>
                `
                imageContainer.appendChild(businessImage);
                card.appendChild(businessName);
                card.appendChild(imageContainer);
                card.appendChild(contactInformation);


                featuredBusinesses.appendChild(card);

                
                
                selectedRanNums.push(randIndex);
            }

            else
            {
                getElitBusiness();
            }
            }
            




        }
    
}

function getRandomNumber(range)
{
    return Math.floor(Math.random() * range);
}