import React from "react";
import "./Video.css";
const Video = ({ img, trailerName, season }) => {
  return (
    <div>
      <img src={img} className="trailer-videos" alt="sajkljd" />
      <div className="trailer-lists">
        <h3 className="trailer-name">{trailerName}</h3>
        <p className="about-trailer">{season}</p>
      </div>
    </div>
  );
};
export default Video;
