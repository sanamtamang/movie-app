import React, { useEffect, useState } from "react";
import AboutFilm from "../AboutFilm/AboutFilm";
// import img1 from "../../images/game.jpg";
import MovieCard from "../MovieCard/MovieCard";
// import img2 from "../../images/money-heist.webp";
import "./Trending.css";
import axios from "axios";

// const TrendingMovies = [
//   {
//     name: "Squid game",
//     img: img1,
//     date: "oct 12,2021",
//     percentage: "80%",
//   },
//   {
//     name: "Aama",
//     img: img2,
//     date: "oct 12,2021",
//     percentage: "80%",
//   },
//   {
//     name: "nikhil Dai",
//     img: img1,
//     date: "oct 12,2021",
//     percentage: "80%",
//   },
//   {
//     name: "Aama",
//     img: img1,
//     date: "oct 12,2021",
//     percentage: "80%",
//   },
//   {
//     name: "Aama",
//     img: img2,
//     date: "oct 12,2021",
//     percentage: "80%",
//   },
//   {
//     name: "Aama",
//     img: img2,
//     date: "oct 12,2021",
//     percentage: "80%",
//   },
// ];

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const getTopRatedMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9aea117f89a416667b837a660f019c9c"
    );
    const results = response.data.results.map((movie) => {
      return {
        name: movie.original_title,
        img: `https://themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`,
        percentage: "80%",
        date: movie.release_date,
      };
    });
    // console.log(results);

    setMovies(results);
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  return (
    <div className="container">
      <AboutFilm
        heading="Trending"
        TvButton="Today"
        theatersButton="This Week"
      />
      <div className="popolar-films">
        {movies.map((Tmovie, index) => (
          <MovieCard key={index} {...Tmovie} />
        ))}
      </div>
    </div>
  );
};
export default Trending;
