import React, {useState} from 'react';

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celcius");

    function ConvertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function ConvertToCelcius(event) {
        event.preventDefault();
        setUnit("celcius")
    }
    if(unit == "celcius") {
        return (
             <div className='WeatherDisplay'>
       <h2>{Math.round(props.celcius)}<span className="celcius">°C | <a href={" "} onClick={ConvertToFahrenheit}>°F</a></span></h2>
       
   </div>
        )
    } else {
        let fahrenheit =(props.celcius * 9/5)+32;
        return ( <div className='WeatherDisplay'>
            <h2>{Math.round(fahrenheit)}<span className="celcius"><a href={" "} onClick={ConvertToCelcius}>°C</a> | °F</span></h2>
            
        </div>
             )
    }
}