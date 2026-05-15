let timeLeft = 10;

const countDown = function () 
{
    setTimeout(() => 
        {
            timeLeft -= 1;
            countDown();
        
        }, 1000);

    
}

const myPromise = new Promise((resolve, reject) => {
    () => 
        {
            countDown(timeLeft);
            resolve("Timeout!")
        }
}
)


myPromise
    .then((result) => console.log(result))