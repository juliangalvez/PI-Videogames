import axios from "axios";

export const getGames = () => {
  return async (dispatch) => {
    let apiGet = await axios.get("http://localhost:3001/videogames");
    console.log(apiGet.data);
    dispatch({ type: "GET_GAMES", payload: apiGet.data });
  };
};
export const getGameDetail = (id) => {
  return async (dispatch) => {
    let apiGet = await axios.get(`http://localhost:3001/videogames/${id}`);
    console.log(apiGet.data);
    dispatch({ type: "GET_GAME_DETAIL", payload: apiGet.data });
  };
};

export const searchGame = (name) => {
  return async (dispatch) => {
    try {
      let apiGet = await axios.get(`http://localhost:3001/videogames?name=${name}`);
      console.log(apiGet.data);
      dispatch({ type: "GET_SEARCH", payload: apiGet.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// export function searchGame(name) {
//   return function (dispatch) {
//     return fetch(`http://localhost:3001/videogames/${name}`)
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch({ type: "GET_SEARCH", payload: json });
//       });
//   };
// }

// Para post con redux -- axios.post("http://localhost:3001/videogames", objeto);
// export const createGame = () => {
//   return async (dispatch) => {};
// };
