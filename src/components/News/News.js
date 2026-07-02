import React, { useState, useEffect } from "react";
import "./News.css";
import NewsList from "../News/NewsList";
require("dotenv").config();

const News = () => {
  const [news, setNews] = useState([]);
  const NewsUrl = process.env.REACT_APP_NEWS_URL;

  useEffect(() => {
    getNews();

    const interval = setInterval(() => {
      getNews();
    }, 900000); // 15 minutes

    return () => clearInterval(interval);
  }, []);

  const getNews = async () => {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const data = await response.json();
    console.log("DB :", data);
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
