import React, { useState } from "react";
import axios from "axios";
import Search from "./Components/Search";
import WeatherDisplay from "./Components/WeatherDisplay";

const api = {
  key: "d3cdac3d21bf07f11cd878b37219f47a",
  base: "https://api.openweathermap.org/data/2.5/",
  units: "&units=metric",
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

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <Search
          inputHandler={inputHandler}
          searchInput={searchInput}
          searchHandler={searchHandler}
        />
        {typeof weather.main !== "undefined" ? (
          <WeatherDisplay weather={weather} />
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Main;