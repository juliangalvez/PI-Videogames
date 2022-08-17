import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../redux/actions";
import "./styles.css";
import logo from "../img/Logoland.png";
import display from "../img/display.png";

export default function Landing() {
  let allGames = useSelector((state) => state.allGames);

  const [on, setOn] = useState(false);

  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (on) {
      dispatch(getGames());
      if (allGames.length > 0) {
        history.push("/videogames");
      }
    }
  }, [dispatch, allGames, on, history]);

  function loader() {
    setOn(true)
  }

  return (
    <div className="background-land">
      <div className="landing-container">
        <div><img className="logo-land" src={logo} alt="f" /></div>
        <div>
          <div>
            <div className="power">POWER</div>
          </div>
          <div className="button-sel">
            <div className="labels">
              of<div>f</div>
            </div>
            <input
              type="checkbox"
              id="check1"
              className="toggle"
              onClick={() => loader()}
            />
            <label htmlFor="check1"></label>
            <div className="labels">on</div>
          </div>
        </div>
        <div>
          <div className="display">
            {on ? (
              <div>
                <img className="display-img" src={display} alt="f" />
                <div className="loading-txt">Loading</div>
                <div className="loader-dots"></div>
              </div>
            ) : null}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
