//get City input
const cityInput = document.querySelector('#city');
//get the click submit and handle it
const submit = document.querySelector("#submit").addEventListener('click',handleInput);
//input country
const countryInput = document.getElementById('country');

//get items from the box
const wheatherIcon = document.getElementById('wheather-icon');
const type = document.getElementById('type');
const location1 = document.getElementById('location1');
const inputCountry = document.getElementById('country');
const temp = document.getElementById('temp');
            

//apiKey
const apiKey ="79fe1f59f0e829683199a1ea4d6d81c4";


function handleInput(){
        if(!cityInput.value) {
            alert("Please enter a city");
            return;
        }else{getData();}
        //else{console.log(city);}
    
}

function getData(){
    
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+','+countryInput.value+'&APPID='+apiKey).//+city+'&APPID='+apiKey).
   then(res =>res.json()).
   then(data=>{

    handleDataDraw(data);
   }).catch(err => alert('The city entered is not correct'));


}

function handleDataDraw(data){
    //set data from json into variables
    let icon = data.weather[0].icon;
    let main = data.weather[0].main;
    let name = data.name;
    let country = data.sys.country;
    let tempature = data.main.temp;

    const iconUrl = `http://openweathermap.org/img/w/`+icon+`.png`
    //iconUrl=`http://openweathermap.org/img/w/10d.png`
    //update html
    wheatherIcon.src = iconUrl;
    type.innerHTML = `${main}`
    location1.innerHTML = `${name}, ${country}`
    temp.innerHTML = `${ convertionDegree(tempature)} `

    //get input clear
    cityInput.value="";
    inputCountry.value="";


}

function convertionDegree(val){
    val = Math.floor(val - 273);
    
    return (val)+" °C";
}

//https://www.studytonight.com/post/how-to-build-a-weather-app-using-javascript-for-complete-beginners
//https://openweathermap.org/current
