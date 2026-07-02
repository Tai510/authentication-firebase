import React from "react";

const NewsList = ({ news }) => {
  if (!news || !news.title) {
    return (
      <div className="news-loading">
        Loading today's news...
      </div>
    );
  }

  return (
    <div className="news-card">
      <img
        className="news-image"
        src={news.urlToImage}
        alt={news.title}
      />

      <h3>{news.title}</h3>

      <p>{news.description}</p>

      <a
        href={news.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Full Story →
      </a>
    </div>
  );
};

export default NewsList;