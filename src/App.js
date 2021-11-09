import React from "react";
import "./App.css";
import Popular from "./components/Popular/Popular";
import Trailer from "./components/Trailer/Trailer";
import Trending from "./components/Trending/Trending";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./components/searchmovies/movies";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/search" element={<Movies />}></Route>

          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Popular />
                <Trailer />
                <Trending />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
