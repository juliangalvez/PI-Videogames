import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <Nav>
        
          <Link to="/videogames" className="links">
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
          <Link to="/videogames" className="links">
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
