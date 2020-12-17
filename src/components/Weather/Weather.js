import React, { useState, useEffect } from "react";
import "./Weather.css";

require("dotenv").config();

const Weather = () => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("sonoma");
  const [temperatures, setTemperatures] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [fahrenheits, setFahrenheits] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // const getLocation = () => {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     const { latitude, longitude } = position.coords;
    //     fetch(
    //       `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=8854f3b07a0a43f3888063812ef1b63b`
    //     )
    //       .then((res) => res.json())
    //       .then((data) => {
    //         const city = [];
    //         city.push(data.results[0].components.town);
    //         setTown(city[0]);
    //       });
    //       console.log("Town", town);
    //   });
    // };
    getWeather()
  }, [query]);

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

  const getWeather = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=cf3faa22250a94532c402637c18e357f&query=${query}`
    );
    const data = await response.json();
    setInfo(data);
    // console.log("info...", info);

    const temperature = info.current.temperature;
    setTemperatures(temperature);
    const fahrenheit = Math.floor((temperature * 9) / 5 + 32);
    setFahrenheits(fahrenheit);
    const location = info.location.name;
    setLocations(location);
    const description = info.current.weather_descriptions[0];
    setDescriptions(description);
  };
  return (
    <div>
      <div className="weather-div">
        <h3>{locations}</h3>
        <div className="temp">
          <h4 className="fahrenheit">
            {fahrenheits}
            <span>°F</span>
          </h4>
        </div>
        <h5>{descriptions}</h5>
      </div>
    </div>
  );
};

export default Weather;
