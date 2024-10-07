import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";


export default function App() {
  return (
  <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." autoFocus="on" />
            </div>
          <div className="col-3"> <input type="submit" className="btn btn-primary" /></div>
        </div>
        </form>
     
      <div className="row temperature">
        <div className="col-2"><img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" />
        </div>
        <div className=" col-2"><h2>21<span className="celcius">°C</span></h2></div>
      <div className="col-7"> <h1 className="mt-4">Addis Ababa</h1></div>
      </div>
      <div className="row">
        <div className="col-6">
        <ul>
        <li>Monday 6:21pm</li>
        <li>Mostly cloudy</li>
      </ul>
        </div>
      
      <div className="col-6">
        <ul>
          <li>Percipitation 5%</li>
          <li>Humidity 84%</li>
          <li>Wind 5 km/h</li>
        </ul>
      </div>
      </div>
      <footer>This project was coded by <strong>Eden Million</strong> and is open-sourced on <strong>GitHub</strong></footer>
  </div>
  )
}

