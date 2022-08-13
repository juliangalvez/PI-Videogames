import axios from "axios";
import {
  GET_GAMES,
  GET_GENRES,
  GET_GAME_DETAIL,
  GET_SEARCH,
  FILTER_BY_GENRE,
  FILTER_ORIGIN,
  SORT_BY_NAME,
  SORT_BY_RATING,
  ERROR_HANDLER
} from "./constants";

export const getGames = () => {
  return async (dispatch) => {
    try {
      let apiGet = await axios.get("http://localhost:3001/videogames");
      dispatch({ type: GET_GAMES, payload: apiGet.data });
    } catch (error) {
      dispatch({ type: "ERROR_HANDLER", payload: error.response.data });
      console.log(error.response.data);
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    let apiGet = await axios.get("http://localhost:3001/genres");
    dispatch({ type: GET_GENRES, payload: apiGet.data });
  };
};

export const getGameDetail = (id) => {
  return async (dispatch) => {
    let apiGet = await axios.get(`http://localhost:3001/videogames/${id}`);
    console.log(apiGet.data);
    dispatch({ type: GET_GAME_DETAIL, payload: apiGet.data });
  };
};

export const searchGame = (name) => {
  return async (dispatch) => {
    try {
      let apiGet = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      console.log(apiGet.data);
      dispatch({ type: GET_SEARCH, payload: apiGet.data });
    } catch (error) {
      dispatch({ type: ERROR_HANDLER, payload: error.response.data });
      console.log(error.response.data);
    }
  };
};

export function filterByGenre(payload) {
  return {
    type: FILTER_BY_GENRE,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_ORIGIN,
    payload,
  };
}

export function sortName(payload) {
  return {
    type: SORT_BY_NAME,
    payload,
  };
}

export function sortRating(payload) {
  return {
    type: SORT_BY_RATING,
    payload,
  };
}
export function errorHandler(payload) {
  return {
    type: ERROR_HANDLER,
    payload,
  };
}

// export function searchGame(name) {
//   return function (dispatch) {
//     return fetch(`http://localhost:3001/videogames/${name}`)
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch({ type: "GET_SEARCH", payload: json });
//       });
//   };
// }
