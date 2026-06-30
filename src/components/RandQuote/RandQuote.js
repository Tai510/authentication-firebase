import React, { useState, useEffect } from "react";
import "./RandQuote.css";

const colors = [
  "#FF5733",
  "#FFB233",
  "#33FF83",
  "#3390FF",
  "#FF33D4",
  "#33FFDA",
  "#99FF33",
  "#FF3333",
];

const quotes = [
  "The most common way people give up their power is by thinking they don’t have any. – Alice Walker",
  "You miss 100% of the shots you don’t take.",
  "Once you choose hope, anything’s possible. - Christopher Reeve",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "The mind is everything. What you think you become. – Buddha",
  "Winning isn’t everything, but wanting to win is. – Vince Lombardi",
  "Certain things catch your eye, but pursue only those that capture the heart. – Ancient Indian Proverb",
  "Fall seven times and stand up eight. – Japanese Proverb",
  "Everything has beauty, but not everyone can see. – Confucius",
  "Tai is the Best!! - Tai",
  "Life is not measured by the number of breaths we take, but by the moments that take our breath away. – Maya Angelou",
  "Happiness is not something readymade. It comes from your own actions. – Dalai Lama",
  "Too many of us are not living our dreams because we are living our fears. – Les Brown",
  "Remember that not getting what you want is sometimes a wonderful stroke of luck. – Dalai Lama",
  "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
];

const getRandomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const RandQuote = () => {
  const [quote, setQuote] = useState(() => getRandomItem(quotes));
  const [color, setColor] = useState(() => getRandomItem(colors));

  const changeQuote = () => {
    setQuote(getRandomItem(quotes));
    setColor(getRandomItem(colors));
  };

  useEffect(() => {
    const interval = setInterval(changeQuote, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="RandQuote">
      <div id="tv" style={{ background: color }} onClick={changeQuote}>
        <h1>{quote}</h1>
      </div>
    </div>
  );
};

export default RandQuote;