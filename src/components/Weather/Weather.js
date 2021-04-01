import React, { useState, useEffect } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from 'axios'

require("dotenv").config();

const Weather = () => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Sonoma');
  const [temperatures, setTemperatures] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [fahrenheits, setFahrenheits] = useState([]);
  const [locations, setLocations] = useState([]);

  const [town, setTown] = useState();

  useEffect(() => {
    // getLocation();
    // getWeather();
  }, [town]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log("search value...", search);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_GEO_API}`
      )
        .then((res) => res.json())
        .then((data) => {
          const city = [];
          city.push(data.results[0].components.town);
          setTown(city[0]);
          console.log("Town", town);
        });
    });
  };

  const getWeather = async () => {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=cf3faa22250a94532c402637c18e357f&query=${town}`
    );
    const data = await response.json();
    setInfo(data);
    console.log("info...", info);

    const temperature = data.current.temperature;
    setTemperatures(temperature);
    const fahrenheit = Math.floor((temperature * 9) / 5 + 32);
    setFahrenheits(fahrenheit);
    const location = data.location.name;
    setLocations(location);
    const description = data.current.weather_descriptions[0];
    setDescriptions(description);
  };
  return (
    <div>
      <WeatherInfo
        location={locations}
        temperature={temperatures}
        fahrenheit={fahrenheits}
        description={descriptions}
      />
    </div>
  );
};

export default Weather;
