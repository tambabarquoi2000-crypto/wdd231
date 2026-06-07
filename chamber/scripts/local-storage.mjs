// Create a function to process local storage
const recentVisit = Date.now();



const userMsg = document.querySelector("#user-msg");

function processLocalStorage(){

    const hasVisited = localStorage.getItem("hasVisited");

    if(!hasVisited)
    {
        userMsg.textContent = "Welcome! Let us know if you have any quesiton."
        localStorage.setItem("hasVisited", true);

        localStorage.setItem("lastVisit", recentVisit)
    }

    else
    {
        const lastVisit = localStorage.getItem("lastVisit");
        const numDays = ((recentVisit - lastVisit)/86400000).toFixed(0)
        
        if(numDays < 1)
        {
            userMsg.textContent = "Back so soon! Awesome!"
        }

        else 
        {
            userMsg.textContent = `You last visited ${numDays} ${numDays == 1? "day": "days"} ago.`
        }
        
        localStorage.setItem("lastVisit", recentVisit);
    }

}


export {processLocalStorage}