import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import AboutFilm from "../AboutFilm/AboutFilm";
import "./Popular.css";
import axios from "axios";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const getTrendingMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=9aea117f89a416667b837a660f019c9c"
    );
    const results = response.data.results.map((movie) => {
      return {
        name: movie.title,
        img: `https://themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
        percentage: "80%",
        date: movie.release_date,
      };
    });

    setMovies(results);
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div>
      <AboutFilm
        heading="Popular"
        TvButton="Today"
        theatersButton="This Week"
      />
      <div className="popular-films">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
export default Popular;
