import React from "react";

const NewsList = ({ news }) => {
  return (
    <div>
      <div className="news-img-div">
        <img src={news.urlToImage}></img>
      </div>
      <div className="news-details-div">
        <p className="news-title">
          {news.title}{" "}
          <span>
            <a
              style={{ display: "table-cell" }}
              target="_blank"
              href={news.url}
            >
              (See Full Story)
            </a>
          </span>
        </p>
        <p className="news-description">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsList;
