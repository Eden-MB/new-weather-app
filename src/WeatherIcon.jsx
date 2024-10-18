import React from 'react';
import { WeatherSvg } from "weather-icons-animated"

export function WeatherIcon(props) {
    

    const codeMap= {
        "01d": "sunny",
        "01n": "clear-night",
        "02d": "partlycloudy",
        "02n": "partlycloudy",
        "03d": "cloudy",
        "03n": "cloudy",
        "04d": "cloudy",
        "04n": "cloudy",
        "09d": "rainy",
        "09n": "rainy",
        "10d": "pouring",
        "10n": "pouring",
        "11d": "lightning",
        "11n": "lightning",
        "13d": "snowy",
        "13n": "snowy",
        "50d": "fog",
        "50n": "fog",
      
    }



  return (<WeatherSvg state={codeMap[props.state]} width={props.width} height={props.height} />)
 }