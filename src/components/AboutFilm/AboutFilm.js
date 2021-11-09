import React from "react";
import "./AboutFilm.css";

const AboutFilm = ({ heading, TvButton, theatersButton }) => {
  return (
    <div>
      <div className="popularFilms">
        <h2>{heading}</h2>
        <div className="buttons">
          <button className="tvButton">{TvButton}</button>
          <button className="tvButton">{theatersButton}</button>
        </div>
      </div>
    </div>
  );
};
export default AboutFilm;
