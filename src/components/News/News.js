import React, { useState, useEffect } from "react";
import "./News.css";
import NewsList from "../News/NewsList";
require("dotenv").config();

const News = () => {
  const [news, setNews] = useState([]);
  const NewsUrl = process.env.REACT_APP_NEWS_URL;

  useEffect(() => {
    const interval = setInterval(() => {
      getNews();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const getNews = async () => {
    const response = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=668b333d5efe410e90cc6e2a2573e41c`);
    const data = await response.json();
    // console.log("News Data:", data);
    const Idx =
      Math.floor(Math.random() * (data.articles.length - 1 - 1 + 1)) + 1;
    setNews(data.articles[Idx]);
  };

  return (
    <div className="News">
      <NewsList news={news} />
    </div>
  );
};

export default News;
