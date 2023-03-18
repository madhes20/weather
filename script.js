const form = document.querySelector("form");
const search = document.querySelector('#search');
const report = document.querySelector('#report');
const API_KEY = '82170b3324504bb67a6e438f1f063b28';
const getWeather = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.cod == "404")
    {
        report.innerHTML =
        `
            <div class="invalid">Please Enter Valid City Name...!</div>
        `
        return;
    }
    report.innerHTML =
    `
        <div class="invalid display">Please Enter Valid City Name...!</div>

        <div id="city">
                <h2>Weather in ${data.name}</h2>
            </div>
            <div id="degree">
                <h1>${data.main.temp} °C</h1>
            </div>
    
            <div id="scenario">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="40px">
                <h3>${data.weather[0].main}</h3>
            </div>
    
            <div id="add-info">
                <h3>Humidity : ${data.main.humidity}%</h3>
                <h3>Wind : ${data.wind.speed} km/h</h3>
            </div>
    `    
}


form.addEventListener('submit',function(event){
    event.preventDefault();
    getWeather(search.value);
});

