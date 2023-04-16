const hoursDiv = document.getElementById("hours");
const minsDiv = document.getElementById("mins");
const secsDiv = document.getElementById("secs");

const date = new Date();

    

    setInterval( function() {
    const date = new Date();
    let currHours = date.getHours();
        if(date.getHours() > 12){
            currHours = currHours - 12;
        }
    hoursDiv.innerText = currHours;
    minsDiv.innerText = date.getMinutes();
    secsDiv.innerText = date.getSeconds();
        
    }, 1000);