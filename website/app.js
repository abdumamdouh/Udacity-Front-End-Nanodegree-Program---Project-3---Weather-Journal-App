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

const getTemp = async () => {
    const response = await fetch(baseURL);
    try{
        const data = await response.json();
        return data.main.temp;
    }
    
    catch(error){
        console.log('error', error);
    }
}

/* Function to POST data to ther server */


const postData = async (url = "" , data) => {
    await fetch(url, {

        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    });

    try{
        return;
    }

    catch(error){
        console.log('error', error);
    }

}

/* Function to GET Project Data from the server */

const getData = async () => {
    const response = await fetch('/get');

    try{
        const data = await response.json();
        return data;
    }

    catch(error){
        console.log('error', error);
    }
}


/* Function to Update UI */

const UpdateUI = () => {
    getData().then((data) => {
        document.getElementById('date').innerHTML = data.date;
        document.getElementById('temp').innerHTML = data.temp;
        document.getElementById('content').innerHTML = data.feeling;
    });

}


// Event listener to add function to existing HTML DOM element
/* Function called by event listener */

document.getElementById('generate').addEventListener('click', () =>{
    zipCode = document.getElementById('zip').value;
    if (!zipCode) alert('Please Enter zip code');
    feeling = document.getElementById('feelings').value;
    baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=metric&appid=${APIkey}`;
    getTemp()
    .then((temp) => {
        postData('/postData', {
            temp: temp,
            date: newDate,
            feeling: feeling,
        } );
    })
    .then(() => UpdateUI());
});


