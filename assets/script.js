
'https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

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



