import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGames } from "../redux/actions";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(getGames());
  }

  return (
    <>
      <Nav>
        <Link to="/videogames" className="links" onClick={handleClick}>
          <h2>
            games <span>vault</span>
          </h2>
        </Link>

        <div>
          <SearchBar />
        </div>
        <div>
          <Link to="/creategame" className="links">
            <button>Create game</button>
          </Link>
          <Link to="/videogames" className="links" onClick={handleClick}>
            <button>Games</button>
          </Link>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;

const Nav = styled.nav`
  h2 {
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  background-color: #aaaaaa;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .links {
    color: black;
    text-decoration: none;
    margin-right: 2rem;
  }
`;
