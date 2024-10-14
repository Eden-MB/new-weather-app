import React, {useState} from "react";
import DisplayDate from "./displayDate.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";



export default function App() {
  const [city, setCity] = useState("Addis Ababa")
  const [weather, setWeather] = useState({ready: false});

  const icons= <i class="fa fa-search" aria-hidden="true"></i>


function handleSubmit(event) {
event.preventDefault();
let apiKey= "97bed167ec49bff56e6c1b63daef9c86";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` 
axios.get(apiUrl).then(weatherResponse);
}
function updateCity(event) {
  event.preventDefault();
  setCity(event.target.value)
}

function weatherResponse(response) {
setWeather({
  ready: true,
  temperature: response.data.main.temp,
  name: response.data.name,
  date: new Date(response.data.dt * 1000),
  humidity: response.data.main.humidity,
  wind: response.data.main.wind,
  description: response.data.weather[0].description,
  icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

})

}

if (weather.ready) {
return (
  <div className="Weather">
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-9">
        <input type="search" placeholder="Enter a city..." autoFocus="on" onChange={updateCity}/>
        </div>
        <div className="col-3"> <button className="btn-primary"> <i class="fa fa-search" aria-hidden="true"></i>
        </button> </div>
    </div>
    </form>
  <div className="row temperature">
    <div className="col-2"><img src={weather.icon} alt="" />
    </div>
    <div className=" col-2"><h2>{Math.round(weather.temperature)}<span className="celcius">°C</span></h2></div>
  <div className="col-7"> <h1 className="mt-4">{weather.name}</h1></div>
     
  </div>
  <div className="row">
    <div className="col-6">
    <ul>
    <div><DisplayDate date={weather.date} /></div>
    <li>{weather.description}</li>
  </ul>
  </div>
  <div className="col-6">
    <ul>
      <li>Percipitation: 5%</li>
      <li>Humidity: {weather.humidity}%</li>
      <li>Wind: {weather.wind}km/h</li>
    </ul>
  </div>
  </div>
  <footer>This project was coded by <strong>Eden Million</strong> and is open-sourced on <strong>GitHub</strong></footer>
</div>
);

} else {
  return (
    <div className="Weather">
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-9 icon" >
        <input type="search" placeholder= " Enter a city..." autoFocus="on" onChange={updateCity} />
        </div>
      <div className="col-3"> <button className="btn-primary"> <i class="fa fa-search" aria-hidden="true"></i>
      </button></div>
      
    </div>
    </form>
   
  <footer>This project was coded by <strong>Eden Million</strong> and is open-sourced on <strong>GitHub</strong></footer>
</div>
);
}
}

