import React from "react";
import "./MovieCard.css";

const MovieCard = ({ img, name, date, percentage }) => {
  return (
    <div className="cover-images">
      <div className="photo-wrap">
        <img src={img} alt="something" className="movie-cover-images" />
        <div className="percentage-border">
          <span className="percentage">{percentage}</span>
        </div>
      </div>
      <div className="movie-detail">
        <h3 className="movieName">{name}</h3>
        <span className="release-date">{date}</span>
      </div>
    </div>
  );
};
export default MovieCard;
