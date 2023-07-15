const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "2f16fa6a7emshb4308c71fdccd44p17bec3jsn507da7ad5561",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)


            temp.innerHTML = response.temp
            cloud_pct.innerHTML = response.cloud_pct
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            //feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity

            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
// This is to get Information of About the app
const aboutLink = document.getElementById("aboutLink");
const aboutContent = document.getElementById("aboutContent");

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutContent.style.display = aboutContent.style.display === "none" ? "block" : "none";
});
// THis is for getting back to Home by clicking on home
const homeLink = document.getElementById("homeLink");

homeLink.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "index.html"; // Replace "index.html" with the actual home page URL
});
// In dropdown to get hyderabad, chennai, bangalore weather
const hyderabadLink = document.getElementById("hyderabadLink");
const chennaiLink = document.getElementById("chennaiLink");
const bangaloreLink = document.getElementById("bangaloreLink")

hyderabadLink.addEventListener("click", function(event) {
  event.preventDefault();
  getWeather("Hyderabad");
});

chennaiLink.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Chennai");
});

bangaloreLink.addEventListener("click",function(event)
{
    event.preventDefault();
    getWeather("Bangalore");
});
// usage guide
const usageGuideLink = document.getElementById("usageGuideLink");
const usageGuideContent = document.getElementById("usageGuideContent");

usageGuideLink.addEventListener("click", function(event) {
  event.preventDefault();
  usageGuideContent.style.display = usageGuideContent.style.display === "none" ? "block" : "none";
});





