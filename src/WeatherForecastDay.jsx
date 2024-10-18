import React from 'react';
import { WeatherIcon } from './WeatherIcon';


export default function WeatherForcastDay({day}) {
    let minTemp= Math.round(day.temp.min);
    let maxTemp= Math.round(day.temp.max);
    

    function DisplayDate() {
        let date = new Date(day.dt * 1000);
        let getDay = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[getDay];
       
      }
    
  
    return(
        <div>
              <div>{DisplayDate()}</div>
                <WeatherIcon state={day.weather[0].icon} width={50} height={50}/>
                <div><span>{maxTemp}°</span><span className='MinTemp'>{minTemp}°</span></div>
        </div>
    )
}