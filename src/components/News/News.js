import React, { useState, useEffect } from "react";
import "./News.css";
import NewsList from "../News/NewsList";

const News = () => {
  const [news, setNews] = useState([]);
  const [dataBase, setDataBase] = useState([]);

  const newsApi = "668b333d5efe410e90cc6e2a2573e41c";
  const newsURL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApi}`;
  const newsURL2 = `http://newsapi.org/v2/everything?q=Apple&from=2020-10-30&sortBy=popularity&apiKey=${newsApi}`;

  const [random, setRandom] = useState();

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const urls = [`${newsURL}`, `${newsURL2}`];
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
