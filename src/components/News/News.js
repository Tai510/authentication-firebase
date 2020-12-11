import React, { useState, useEffect } from "react";
import "./News.css";
import NewsList from "../News/NewsList";

const News = () => {
  const [news, setNews] = useState([]);
  const [dataBase, setDataBase] = useState([]);

  const [random, setRandom] = useState();

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const urls = [process.env.REACT_APP_NEWS_URL, process.env.REACT_APP_NEWS_URL2];
    const randUrl = urls[Math.floor(Math.random() * urls.length)];
    const response = await fetch(`${randUrl}`);
    const data = await response.json();
    const [info] = data.articles.map((list) => {
      setNews(list);
    });
    // console.log("News Data:", data);
  };

  return (
    <div className="News">
      <NewsList news={news} />
    </div>
  );
};

export default News;
