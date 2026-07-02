import React, { useState, useEffect } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

const Weather = () => {
  // 1. State
  const [town, setTown] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);

  // 2. API keys
  const geoKey = process.env.REACT_APP_GEO_API;

  // 3. Run when component first loads
  useEffect(() => {
    getLocation();
  }, []);

  // 4. Get user's current location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude, longitude } = position.coords;
        getWeather(latitude, longitude);

        fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${geoKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("Location data:", data);

            const components = data.results?.[0]?.components;

            let city =
              components?.city ||
              components?.town ||
              components?.village ||
              components?.municipality ||
              components?.hamlet ||
              components?.county;

            if (city === "El Verano") {
              city = "Sonoma";
            }

            const state = components?.state;

            setTown(`${city}, ${state}`);
          });
      },
      
      function (error) {
        console.log("Location error:", error);
        setError("Unable to get your location.");
      }
    );
  };

  const getWeather = (latitude, longitude) => {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Weather data:", data);
      setWeather(data);
    })
    .catch((error) => {
      console.log("Weather error:", error);
      setError("Unable to get weather.");
    });
};

  // 5. What shows on the page
  return (
    <div>
      {error && <p>{error}</p>}

      <WeatherInfo town={town} weather={weather} />
    </div>
  );
};

export default Weather;
