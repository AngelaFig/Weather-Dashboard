
'https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

// US CODE: 840 

var apiKey = '59939906650b56969f54c525743fa617'; 
var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
var geoCodifyApiKey = '86fe7403b502100fa60e7cb286133efa36540f9c'
var geoCodeBaseUrl = 'https://api.geocodify.com/v2'


var inputEl = document.querySelector("#user-input");
var submitBtnEl = document.querySelector("#submit-button");
var userHistoryEl = document.querySelector(".search-history");
var currentDataEl = document.querySelector("#current-weather");

var lat
var lon 

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

function geoCode(city) {
    fetch(`https://api.geocodify.com/v2/geocode?api_key=${geoCodifyApiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.response.features[0].bbox[0])
        console.log(data.response.features[0].bbox[1])

        var lat =data.response.features[0].bbox[0]
        var lon =data.response.features[0].bbox[1]
    })
}

geoCode('Boston')



// fetch(requestUrl)
// .then (response)



submitBtnEl.addEventListener('click', function(event){
   
    event.preventDefault();

    var cityInput = inputEl.value.trim();

    if(cityInput) {
        
        fetch(requestUrl)
        .then(response)

        currentDataEl.textContent="";
        inputEl.value = "";
    }else{
        // alert('Please Enter a Valid Location')
    }
    console.log("hello")
})

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, 
// the temperature, the humidity, and the wind speed


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, 
// the temperature, the wind speed, and the humidity



// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

