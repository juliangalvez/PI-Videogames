import axios from "axios";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pf, validate, validator } from "../js/modules";
import { getGenres } from "../redux/actions";

export default function Form() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

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
  const [errorButton, setErrorButton] = useState(
    Object.keys(formErr).length < 1 ? false : true
  );

  function handleChange(e) {
    setGame({
      ...game,
      [e.target.name]: e.target.value,
    });

    setTimeout(() => {
      setformErr(validate(game));
    }, 1000);
  }

  //   function handleChange(e) {
  //     e.preventDefault();
  //     setGame((prevData) => {
  //       return {
  //         ...prevData,
  //         [e.target.name]: e.target.value,
  //       };
  //     });

  //     setTimeout(() => {
  //       console.log(game);
  //     }, 2000);
  //     // setTimeout(() => {
  //     //     setformErr(modules.validate(game))
  //     // }, 1000);
  //   }

  function handleGenres(e) {
    setGame({
      ...game,
      genres: [...new Set([...game.genres, parseInt(e.target.value)])],
    });
    setTimeout(console.log(game), 1000);
  }

  function handlePlatforms(e) {
    setGame({
      ...game,
      platforms: [...new Set([...game.platforms, e.target.value])],
    });
    console.log(game);
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
        image: "https://duracionde.com/storage/images/5f8ba74425e22.jpg",
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
    // Mensaje de creacion exitosa
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              key="name"
              name="name"
              value={game.name}
              onChange={handleChange}
            ></input>
            {formErr.name ? <h4>{formErr.name}</h4> : false}

            <label>Description</label>
            <input
              key="description"
              name="description"
              value={game.description}
              onChange={handleChange}
            ></input>
            {formErr.description ? <h4>{formErr.description}</h4> : false}

            <label>Image</label>
            <input
              key="image"
              name="image"
              value={game.image}
              onChange={handleChange}
            ></input>

            <label>Released</label>
            <input
              key="released"
              type="date"
              name="released"
              value={game.released}
              onChange={handleChange}
            ></input>
            {formErr.released ? <h4>{formErr.released}</h4> : false}

            <label>Rating</label>
            <input
              key="rating"
              name="rating"
              value={game.rating}
              onChange={handleChange}
            ></input>
            {formErr.rating ? <h4>{formErr.rating}</h4> : false}

            <fieldset>
              <legend>Genre:</legend>
              {genres.map((g, i) => {
                return (
                  <div key={g}>
                    <input
                      type="checkbox"
                      name={g}
                      value={i + 1}
                      onChange={handleGenres}
                      key={i}
                    ></input>
                    <label>{g}</label>
                  </div>
                );
              })}
            </fieldset>

            <fieldset>
              <legend>Platform:</legend>
              {pf.map((p, i) => {
                return (
                  <div key={p}>
                    <input
                      type="checkbox"
                      name={p}
                      value={p}
                      onChange={handlePlatforms}
                      key={i}
                    ></input>
                    <label>{p}</label>
                  </div>
                );
              })}
            </fieldset>

            <button type="submit" disabled={errorButton}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// list.map((currElement, index) => {
//     console.log("The current iteration is: " + index);
//     console.log("The current element is: " + currElement);
//     console.log("\n");
//     return currElement; //equivalent to list[index]
//   });
