import React, { useState, useEffect } from "react";
import "./Weather.css";
import { WiHumidity } from "react-icons/wi/";
import { FiThermometer, FiWind } from "react-icons/fi";

const Weather = () => {
  // Weather
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Sonoma");

  const [temperatures, setTemperatures] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [fahrenheits, setFahrenheits] = useState([]);
  const [locations, setLocations] = useState([]);
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);

  const API_KEY = "cf3faa22250a94532c402637c18e357f";

  useEffect(() => {
      getWeather();
  }, [query])

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log("search value :", search);
  };

  const getWeather = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    setInfo(data);
    console.log("info...", data);

    // Values for the App
    const temperature = data.current.temperature;
    setTemperatures(temperature);
    const fahrenheit = Math.floor((temperature * 9) / 5 + 32 + 26);
    setFahrenheits(fahrenheit);
    const location = data.location.name;
    setLocations(location);
    const description = data.current.weather_descriptions[0];
    setDescriptions(description);
    const region = data.location.region;
    setRegions(region);
    const country = data.location.country;
    setCountries(country);
  };
  return (
    <div>
      <div className="weather-div">
        <h3>{locations}</h3>
        <div className="temp">
          <h4 className="fahrenheit">
            {fahrenheits}<span>°F</span>
          </h4>
        </div>
        <h5>{descriptions}</h5>
      </div>
    </div>
  );
};

export default Weather;
