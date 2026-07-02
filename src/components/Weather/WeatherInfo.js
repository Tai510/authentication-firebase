import React from "react";

const WeatherInfo = ({ town, weather }) => {
  const currentTemp = weather?.current?.temperature_2m;
  const humidity = weather?.current?.relative_humidity_2m;
  const wind = weather?.current?.wind_speed_10m;
  const high = weather?.daily?.temperature_2m_max?.[0];
  const low = weather?.daily?.temperature_2m_min?.[0];

  return (
    <div className="weather-div">
      

      <p className="weather-town">📍 {town || "Finding your location..."}</p>

      <div className="weather-current">
        <span className="weather-current-temp">
          {currentTemp ? Math.round(currentTemp) : "--"}°
        </span>
      </div>

      <div className="weather-details">
        <div className="weather-detail">
          <span className="detail-label">High</span>
          <span className="detail-value">{high ? Math.round(high) : "--"}°</span>
        </div>

        <div className="weather-detail">
          <span className="detail-label">Low</span>
          <span className="detail-value">{low ? Math.round(low) : "--"}°</span>
        </div>

        <div className="weather-detail">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity || "--"}%</span>
        </div>

        <div className="weather-detail">
          <span className="detail-label">Wind</span>
          <span className="detail-value">
            {wind ? Math.round(wind) : "--"} mph
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;