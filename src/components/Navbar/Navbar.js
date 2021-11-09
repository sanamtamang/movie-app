import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchInput}`);
  };
  return (
    <div>
      <nav className="navBar"></nav>
      <div className="searchInput">
        <form onSubmit={handleClick}>
          <input
            value={searchInput}
            onChange={handleChange}
            placeholder="Search for a movie,tv show,person"
          />
          <button className="searchbutton" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
export default NavBar;
