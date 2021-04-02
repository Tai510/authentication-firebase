import React, { useState, useEffect } from "react";
import "./News.css";
import NewsList from "../News/NewsList";
import axios from 'axios';
require("dotenv").config();

const News = () => {
  const [news, setNews] = useState([]);
  const NewsUrl = process.env.REACT_APP_NEWS_URL;

  useEffect(() => {
    const interval = setInterval(() => {
      // getNews();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // const getNews = async () => {
  //   const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=668b333d5efe410e90cc6e2a2573e41c`);
  //   const data = await response.json();
  //   console.log("News Data:", data);
  //   const Idx = Math.floor(Math.random() * (data.articles.length - 1 - 1 + 1)) + 1;
  //   setNews(data.articles[Idx]);
  // };

  const options = {
    method: 'GET',
    url: 'https://google-news1.p.rapidapi.com/topic-headlines',
    params: {topic: 'WORLD', country: 'US', lang: 'en'},
    headers: {
      'x-rapidapi-key': 'd62db445fdmshd6a32a91526ff55p138e7cjsnd463c965a40c',
      'x-rapidapi-host': 'google-news1.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(' 🦁 ', response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div className="News">
      <NewsList news={news} />
    </div>
  );
};

export default News;
