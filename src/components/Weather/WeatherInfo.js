import React from "react";

const WeatherInfo = (/* {location, fahrenheit, description} */) => {
  return (
    <div className="weather-div">
      {/* <h3>{location}</h3> */}
      <div className="temp">
        <h4 className="fahrenheit">
          {/* {fahrenheit} */}
          <span>°F</span>
        </h4>
      </div>
      {/* <h5>{description}</h5> */}
    </div>
  );
};

export default WeatherInfo;
