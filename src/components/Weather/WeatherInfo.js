import React from "react";

const WeatherInfo = ({location, fahrenheit, description ,town, state}) => {

  return (
    <div className="weather-div">
      <div className="temp">
        <h4 className="fahrenheit">
          {/* {fahrenheit} */}
          <span class='location text'>
            {" "}
            {/* °F */}
            <p>You're in</p>
            <span className="location text">{town}</span>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default WeatherInfo;
