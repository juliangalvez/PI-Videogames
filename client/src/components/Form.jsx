import axios from "axios";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pf, validate, validator } from "../js/modules";
import { getGenres } from "../redux/actions";
import Error from "./Error";
import NavBar from "./NavBar";
import "./styles.css";

export default function Form() {
  const dispatch = useDispatch();
  let genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const [game, setGame] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
  });

  const [formErr, setformErr] = useState({});
  const [errorButton, setErrorButton] = useState(true);

  useEffect(() => {
    setErrorButton(Object.keys(formErr).length === 0 ? false : true);
  }, [formErr]);

  function handleChange(e) {
    setGame({
      ...game,
      [e.target.name]: e.target.value,
    });

    setformErr(validate(game));
  }

  function handleValidate() {
    setformErr(validate(game));
  }

  function handleGenres(e) {
    setGame({
      ...game,
      genres: [...new Set([...game.genres, parseInt(e.target.value)])],
    });

    setformErr(validate(game));
  }

  function handlePlatforms(e) {
    setGame({
      ...game,
      platforms: [...new Set([...game.platforms, e.target.value])],
    });

    setformErr(validate(game));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let post = {
      game: {
        name: game.name,
        description: game.description,
        released: game.released,
        rating: game.rating,
        platforms: game.platforms,
        image:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/12c8ce61832289.5a7b437f7c6c2.png",
        genres: game.genres,
      },
    };
    if (validator(game)) {
      try {
        await axios.post("http://localhost:3001/videogames/create", post);
      } catch (error) {
        console.log(error);
      }
    }
    setGame({
      name: "",
      description: "",
      image: "",
      released: "",
      rating: "",
      genres: [],
      platforms: [],
    });
  }

  return (
    <div className="container">
      <div>
        <NavBar />
      </div>
      <div className="error-display">
        <Error />
      </div>
      
      <div className="div-container">
        <div className="header">
          <button className="back">{"<<"}</button>
          <div className="add-game">ADD GAME</div>
        </div>
        <div className="div-border">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="text">
                <div className="first-row">
                  <div className="first-row item-group">
                    <label className="labels">Name</label>
                    <input
                      className="inputs"
                      placeholder="Enter a game name"
                      key="name"
                      name="name"
                      value={game.name}
                      onBlur={handleValidate}
                      onChange={handleChange}
                    ></input>
                    {formErr.name ? (
                      <h4 className="h4">{formErr.name}</h4>
                    ) : (
                      false
                    )}
                  </div>
                  <div className="first-row item-group">
                    <label className="labels">Description</label>
                    <textarea
                      type="text"
                      rows="6"
                      placeholder="Enter a description"
                      className="inputs item-desc"
                      key="description"
                      name="description"
                      value={game.description}
                      onBlur={handleValidate}
                      onChange={handleChange}
                    ></textarea>
                    {formErr.description ? (
                      <h4 className="h4">{formErr.description}</h4>
                    ) : (
                      false
                    )}
                  </div>
                </div>

                <div className="second-row">
                  <div className="second-row item-image">
                    <label className="labels">Image</label>
                    <input
                      className="inputs"
                      placeholder="http://example.png"
                      key="image"
                      name="image"
                      value={game.image}
                      onBlur={handleValidate}
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="second-row item-rel">
                    <label className="labels">Released</label>
                    <input
                      className="inputs"
                      key="released"
                      type="date"
                      name="released"
                      value={game.released}
                      onBlur={handleValidate}
                      onChange={handleChange}
                    ></input>
                    {formErr.released ? (
                      <h4 className="h4">{formErr.released}</h4>
                    ) : (
                      false
                    )}
                  </div>

                  <div className="second-row item-group">
                    <label className="labels">Rating</label>
                    <input
                      className="inputs"
                      placeholder="Enter a value between 0 and 5"
                      key="rating"
                      name="rating"
                      value={game.rating}
                      onBlur={handleValidate}
                      onChange={handleChange}
                    ></input>
                    {formErr.rating ? (
                      <h4 className="h4">{formErr.rating}</h4>
                    ) : (
                      false
                    )}
                  </div>
                </div>
              </div>
              <div>
                <fieldset>
                  <legend>Genre:</legend>
                  <div className="fieldset">
                    {genres.map((g, i) => {
                      return (
                        <div key={g}>
                          <input
                            type="checkbox"
                            name={g}
                            value={i + 1}
                            onBlur={handleValidate}
                            onChange={handleGenres}
                            key={i}
                          ></input>
                          <label>{g}</label>
                        </div>
                      );
                    })}
                  </div>
                  {formErr.rating ? (
                    <h4 className="h4">{formErr.genres}</h4>
                  ) : (
                    false
                  )}
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>Platform:</legend>
                  <div className="fieldset">
                    {pf.map((p, i) => {
                      return (
                        <div key={p}>
                          <input
                            type="checkbox"
                            name={p}
                            value={p}
                            onBlur={handleValidate}
                            onChange={handlePlatforms}
                            key={i}
                          ></input>
                          <label>{p}</label>
                        </div>
                      );
                    })}
                  </div>
                  {formErr.rating ? (
                    <h4 className="h4">{formErr.platforms}</h4>
                  ) : (
                    false
                  )}
                </fieldset>
              </div>
              <div>
                <button type="submit" disabled={errorButton}>
                  Create
                </button>
              </div>
            </form>
          </div>
          <div>
            <div></div>
            <div>RESET</div>
          </div>
        </div>
      </div>
    </div>
  );
}
