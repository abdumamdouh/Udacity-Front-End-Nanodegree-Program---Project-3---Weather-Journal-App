/* Global Variables */
let zipCode = document.getElementById('zip').value; 
let feeling = document.getElementById('feelings').value;
// Personal API Key for OpenWeatherMap API

const APIkey = '526c32dd935943840aaf64738cac5c87';
let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=metric&appid=${APIkey}`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();


/* Function to GET Web API Data*/

const getData = async () => {
    const response = await fetch(baseURL);
    try{
        const data = await response.json();
        console.log(data.main.temp);
    }
    
    catch(error){
        console.log('error', error);
    }
}

/* Function to POST data */


/* Function to GET Project Data */


/* Function to Update UI */


// Event listener to add function to existing HTML DOM element
/* Function called by event listener */

document.getElementById('generate').addEventListener('click', () =>{
    zipCode = document.getElementById('zip').value;
    feeling = document.getElementById('feelings').value;
    baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=metric&appid=${APIkey}`;
    getData();
});


