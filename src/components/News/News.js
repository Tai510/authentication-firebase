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
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const getNews = async () => {
    const response = await fetch(`${NewsUrl}`);
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
