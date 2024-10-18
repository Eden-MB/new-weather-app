import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WeatherForcastDay from "./WeatherForecastDay"
import "./index.css";

export default function WeatherForecast(props) {
const [loaded, setLoaded]= useState(false);
const [forecast, setForecast] = useState(" ")

useEffect(() => {
    setLoaded(false);
}, [props.coords]);


function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
    console.log(response.data)
}
if (loaded) {
    return (
        <div className='WeatherForcast' >
            <div className='row'>
                {forecast.map((dailyForecast, index)=> {
                      if (index <5) {
                        return (
                            <div className='col' key={index}>
                              <WeatherForcastDay day={dailyForecast} />
                        </div>);
                      } else {
                        return null;
                      }
                        })
                }
              
                
            </div>
        </div>
    )
} else {
    let apiKey = "8cac06f7ab6c10287cd06a316ff84a57";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayForecast);

   return null
 
}
    
}