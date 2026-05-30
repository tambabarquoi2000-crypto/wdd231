const cardsContainer = document.querySelector("#membership-details");
const membershipLevels = "http://127.0.0.1:5500/chamber/data/membership.json";

createMembershipLevelCards(membershipLevels);

async function createMembershipLevelCards (obj) {
    
    const response = await fetch(obj);
    const data = await response.json();



    // console.log(data.memberShipLevel);

    data.memberShipLevel.forEach(memberShipType =>
    {
        // Definining container for the modal cards
        const cont = document.createElement("div");

        const memberShipTitle = document.createElement("p");
        memberShipTitle.textContent = memberShipType.title;


        // Create a button for more options in each card
        const learnMoreButton = document.createElement("button");
        learnMoreButton.setAttribute("type", "button");
        learnMoreButton.textContent = "Learn More";

        // Add an even listener to each more options button created
        learnMoreButton.addEventListener("click", () =>
        {
            
            const myModal = document.createElement("dialog");
            const closeModal = document.createElement("button");
            closeModal.textContent = "❌";
            closeModal.addEventListener("click", () => myModal.close())
            myModal.appendChild(closeModal);
        
            // Get benefits and display it as a list.

            const benefits = document.createElement("ul");

            for (let benefit of memberShipType.benefits) {
                    const li = document.createElement("li");
                    li.textContent = benefit;
                    benefits.appendChild(li);
                    
            }

            // Create a DOM object for each key of the membership level
                
                const mTitle = document.createElement("h2");
                mTitle.textContent = memberShipType.title;
                const mFees = document.createElement("p")
                mFees.textContent = `Cost: $${memberShipType.fees}.00`;
                const mBenefits = document.createElement("div")
                mBenefits.appendChild(benefits);

                // Add all DOM object elements to myModal including the closeModal button

                myModal.appendChild(mTitle);
                myModal.appendChild(mFees);
                myModal.appendChild(mBenefits);
                myModal.appendChild(closeModal);

                const modalContainer = document.querySelector("#modal");
                modalContainer.innerHTML = "";
                modalContainer.appendChild(myModal);
                myModal.showModal();
        })

                cont.appendChild(memberShipTitle);
                cont.appendChild(learnMoreButton);
                cardsContainer.appendChild(cont);
    }
    )
}

