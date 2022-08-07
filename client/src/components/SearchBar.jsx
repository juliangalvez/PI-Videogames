import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchGame } from "../redux/actions";

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
      <input
        type="text"
        placeholder="Search game"
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" onClick={(e) => handleClick(e)}>
        Search
      </button>
    </div>
  );
}
