import React from 'react';

const WeatherDisplay = (props) => {
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
        <div>
          <div className="location-box">
            <div className="location">{props.weather.name},{props.weather.sys.country} </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(props.weather.main.temp)}°C
            </div>
            <div className="weather">{props.weather.weather[0].main}</div>
            <div className="description-box" >Feels Like: {Math.round(props.weather.main.feels_like)}°C | Max Temp: {Math.round(props.weather.main.temp_max)}°C | Min Temp: {Math.round(props.weather.main.temp_min)}°C </div>
          </div>
        </div>
    );
}

export default WeatherDisplay;
