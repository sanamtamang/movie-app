import React, { useEffect, useState } from "react";
import img1 from "../../images/game.jpg";
import AboutFilm from "../AboutFilm/AboutFilm";
// import NavBar from "../Navbar/Navbar";
// import Video from "../Video/Video";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

// const TrailerMovie = [
//   {
//     img: img1,
//     trailerName: "Foundation",
//     season: "Official trailer",
//   },
//   {
//     img: img1,
//     trailerName: "Sanam Re",
//     season: "Official trailer",
//   },
//   {
//     img: img1,
//     trailerName: "Hami Sathi bhai",
//     season: "Official trailer",
//   },
//   {
//     img: img1,
//     trailerName: "Hami Sathi bhai",
//     season: "Official trailer",
//   },
// ];

const Movies = () => {
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  console.log(searchInput);

  const getSearchMovies = async (inputValue) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9aea117f89a416667b837a660f019c9c&language=en-US&query=${inputValue}&page=1&include_adult=false`
    );

    const results = response.data.results.map((movie) => {
      return {
        name: movie.original_title,
        img: `https://themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`,
        percentage: "80%",
        date: movie.release_date,
      };
    });

    setMovies(results);
  };

  useEffect(() => {
    getSearchMovies(searchInput);
  }, [searchInput]);

  return (
    <>
      <div className="latest-trailer">
        <div className="trailer">
          <AboutFilm
            heading="Search Movies"
            img={img1}
            TvButton="On Tv"
            theatersButton="On Theaters"
          />

          <div className="trailer-part">
            {movies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Movies;
