const apiKey = "9e6df38725a8bad9c095f47660d6e7f3";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const searchBox=document.querySelector(".search-box")
const searchBtn=document.querySelector(".search-btn")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML='<i class="fa-solid fa-water"></i>'+data.main.humidity +"%";
    document.querySelector(".windspeed").innerHTML='<i class="fa-solid fa-wind"></i>'+ data.wind.speed +"km/h";
    document.querySelector(".data").style.display="block";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

checkWeather();
