import React from "react";

const WeatherInfo = (/* {location, fahrenheit, description} */) => {
  return (
    <div className="weather-div">
      {<h3>{/* {location} */}Sonoma</h3>}
      <div className="temp">
        <h4 className="fahrenheit">
          {/* {fahrenheit} */}
          <span>82 °F</span>
        </h4>
      </div>
      {<h5>{/* {description} */}Sunny</h5>}
    </div>
  );
};

export default WeatherInfo;
