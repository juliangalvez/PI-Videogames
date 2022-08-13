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
    setName("");
    document.getElementById("input").value = "";
  }

  // var inputKey = document.getElementById("input");
  // inputKey.addEventListener("keypress", function (event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     document.getElementById("find").click();
  //   }
  // });

  return (
    <FinderArea>
      <SearchInput
        id="input"
        type="text"
        placeholder="Find a game"
        onChange={(e) => handleInput(e)}
      ></SearchInput>
      <div className="find-button-div">
        <SearchBtn id="find" type="submit" onClick={(e) => handleClick(e)}>
          <img className="find" src={find} alt="f" />
        </SearchBtn>
      </div>
    </FinderArea>
  );
}

const FinderArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 540px;
  .find-button-div {
    background: black;
    width: 60px;
    height: 61px;
  }
`;

const SearchInput = styled.input`
  font-family: VT323;
  font-size: 32px;
  border: solid black;
  border-width: 1px 3px 5px 1px;
  width: 450px;
  height: 53px;
  color: ${colors.grey800};
  background-color: ${colors.sky};
  padding-left: 20px;

  &:hover {
    background-color: ${colors.grey300};
    color: ${colors.grey800};
  }

  &::placeholder {
    color: ${colors.grey800};
  }

  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  transition: transform 0.2s ease;
  width: 60px;
  height: 61px;
  border: solid black;
  border-width: 1px 3px 5px 1px;
  background-color: ${colors.sky};
  &:hover {
    transition: transform 0.1s ease;
    transform: translate(-0.06em, -0.06em);
  }

  &:active {
    transform: translate(0em, 0em);
  }
`;

// const SearchBtn = styled.button`
//   font-family: VT323;
//   font-size: 32px;
//   border: none;
//   margin-left: 5px;
//   width: 60px;
//   height: 61px;

//   background-color: ${colors.sky};
//   &:hover {
//     background-color: ${colors.grey300};
//     color: ${colors.grey800};
//   }

//   &:disabled {
//     background-color: ${colors.grey800};
//     color: ${colors.grey50};
//   }
// `;
