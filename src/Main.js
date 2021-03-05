import React, { useState } from "react";
import "./Styles/Styles.css";
import axios from "axios";

const api = {
  key: "d3cdac3d21bf07f11cd878b37219f47a",
  base: "https://api.openweathermap.org/data/2.5/",
  units: "&units=metric"
};

const Main = () => {
  
  const [searchInput, setSearchInput] = useState();
  const [weather, setWeather] = useState({});

  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      axios
        .get(`${api.base}weather?q=${searchInput}${api.units}&appid=${api.key}`)
        .then((response) => {
          console.log(response.data);
          setWeather(response.data);
          setSearchInput("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
  //  <div className='app warm'>
      <div className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}> 
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={inputHandler}
            value={searchInput}
            onKeyPress={searchHandler}
          />
        </div>
        {(typeof weather.main !== "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name},{weather.sys.country} </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
};

export default Main;
