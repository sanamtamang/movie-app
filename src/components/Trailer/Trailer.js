import React from "react";
import AboutFilm from "../AboutFilm/AboutFilm";
import Video from "../Video/Video";
import img1 from "../../images/game.jpg";
import "./Trailer.css";
// import axios from "axios";
const TrailerMovie = [
  {
    img: img1,
    trailerName: "Foundation",
    season: "Official trailer",
  },
  {
    img: img1,
    trailerName: "Sanam Re",
    season: "Official trailer",
  },
  {
    img: img1,
    trailerName: "Hami Sathi bhai",
    season: "Official trailer",
  },
  {
    img: img1,
    trailerName: "Hami Sathi bhai",
    season: "Official trailer",
  },
];
const Trailer = () => {
  return (
    <div className="latest-trailer">
      <div className="trailer">
        <AboutFilm
          heading="Latest Trailers"
          img={img1}
          TvButton="On Tv"
          theatersButton="On Theaters"
        />
        <div className="trailer-part">
          {TrailerMovie.map((Trailer, index) => (
            <Video key={index} {...Trailer} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Trailer;
