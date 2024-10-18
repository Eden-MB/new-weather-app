import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import DisplayDate from "./displayDate.jsx";
import { WeatherIcon } from './WeatherIcon.jsx';
import WeatherTemp from './WeatherTemperature.jsx';
import WeatherForecast from './WeatherForcast.jsx';

export default function Weather() {
    const [city, setCity] = useState("Addis Ababa")
    const [weather, setWeather] = useState({ready: false});
  
    const icons= <i class="fa fa-search" aria-hidden="true"></i>
  
    function search(event) {
      event.preventDefault();
      handleSubmit();
    }
  function handleSubmit() {
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
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,  
    wind: response.data.wind.speed,
    coordinates: response.data.coord,
  })
  
  }
  
  if (weather.ready) {
  return (
    <div className="Weather">
    <form onSubmit={search}>
      <div className="row">
        <div className="col-9">
          <input type="search" placeholder="Enter a city..." autoFocus="on" onChange={updateCity}/>
          </div>
          <div className="col-3"> <button className="btn-primary"> <i class="fa fa-search" aria-hidden="true"></i>
          </button> </div>
      </div>
      </form>
    <div className="row temperature">
      <div className="col-2"><WeatherIcon state={weather.icon} alt="" width={90} height={90}/>
      </div>
      <div className=" col-3"><WeatherTemp celcius={weather.temperature} /></div>
    <div className="col-7"> <h1 className="mt-4"  >{weather.name}</h1></div>
       
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
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind}km/h</li>
      </ul>
    </div>
    <div className='WeatherForecast '>
    <WeatherForecast coords={weather.coordinates}/>
    </div>
    </div>
    <footer>This project was coded by <a href="https://github.com/Eden-MB/new-weather-app" target='blank'><strong>Eden Million</strong> </a>and is open-sourced on <a href="https://github.com/Eden-MB/new-weather-app" target='blank'><strong>GitHub</strong></a></footer>
  </div>
  );
  
  } else {
    handleSubmit()
    return "Loading...";
  }
}

