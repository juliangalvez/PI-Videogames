import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchGame } from "../redux/actions";
import styled from "styled-components";
import { colors } from "../theme/variables";
import find from "../img/Find.png";


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInput(e) {
    setName(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(searchGame(name));
  }

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="Find a game"
        onChange={(e) => handleInput(e)}
      ></SearchInput>
      <SearchBtn type="submit" onClick={(e) => handleClick(e)}>
      <img className="find" src={find} alt="f" />
      </SearchBtn>
    </div>
  );
}

const SearchInput = styled.input`
  font-family: VT323;
  font-size: 32px;
  border: none;
  width: 450px;
  height: 60px;
  color: ${colors.grey800};
  background-color: ${colors.sky};
  padding-left: 20px;

  &:hover {
    background-color: ${colors.grey300};
    color: ${colors.grey800};
  }

  &:disabled {
    background-color: ${colors.grey800};
    color: ${colors.grey50};
  }
  &::placeholder{
    color: ${colors.grey800};
  }
`;
const SearchBtn = styled.button`
  font-family: VT323;
  font-size: 32px;
  border: none;
  margin-left: 5px;
  width: 60px;
  height: 61px;
  
  background-color: ${colors.sky};
  &:hover {
    background-color: ${colors.grey300};
    color: ${colors.grey800};
  }

  &:disabled {
    background-color: ${colors.grey800};
    color: ${colors.grey50};
  }
`;
