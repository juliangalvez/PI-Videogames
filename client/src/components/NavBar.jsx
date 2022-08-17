import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGames, errorHandler } from "../redux/actions";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { BtnAdd, BtnMain } from "./styles";
import logo from "../img/Logo.png";

function NavBar() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(getGames());
    dispatch(errorHandler(""));
  }

  return (
    <>
      <NavWrap>
        <Nav>
          <div>
            <Link to="/videogames" className="links" onClick={handleClick}>
              <img className="logo" src={logo} alt="f" />
            </Link>
          </div>

          <div>
            <SearchBar />
          </div>
          <div className="right-nav">
            <div className="rigth-div-games">
              <Link to="/videogames" className="links" onClick={handleClick}>
                <BtnMain>{"< GAMES"}</BtnMain>
              </Link>
            </div>
            <div className="rigth-div-add">
              <Link to="/creategame" className="links">
                <BtnAdd>
                  <span className="button_top">{"+ ADD GAME"}</span>
                </BtnAdd>
              </Link>
            </div>
          </div>
        </Nav>
      </NavWrap>
    </>
  );
}

export default NavBar;

const NavWrap = styled.div`
  //position: fixed;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  .right-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .links {
    color: black;
    text-decoration: none;
    //margin-right: 2rem;
  }
  .rigth-div-games {
    background: black;
    width: 136px;
    height: 61px;
    margin-right: 20px;
  }
  .rigth-div-add {
    background: black;
    width: 188px;
    height: 61px;
    margin-right: 20px;
  }
`;
