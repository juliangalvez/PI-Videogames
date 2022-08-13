import { ab, ba, nab, nba } from "../js/modules";
import {
  GET_GAMES,
  GET_GENRES,
  GET_GAME_DETAIL,
  GET_SEARCH,
  FILTER_BY_GENRE,
  FILTER_ORIGIN,
  SORT_BY_NAME,
  SORT_BY_RATING,
  ERROR_HANDLER,
} from "./constants";

let content = 0;
let allContent = 0;
let sortRating = [];

let initialState = {
  allGames: [],
  api: [],
  created: [],
  games: [],
  game: [],
  genres: [],
  filter: "all",
  error: "",
  result: true,
  searchResult: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload,
        games: action.payload,
        searchResult: [],
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case GET_GAME_DETAIL:
      return {
        ...state,
        game: action.payload,
      };

    case GET_SEARCH:
      return {
        ...state,
        games: action.payload,
        searchResult: action.payload,
      };

    case FILTER_ORIGIN:
      allContent = state.allGames;

      let createdFiltered;
      if (action.payload === "all") {
        createdFiltered = allContent;
      }
      if (action.payload === "api") {
        createdFiltered = allContent.filter((f) => !f.id.length);
      }
      if (action.payload === "created") {
        createdFiltered = allContent.filter((f) => f.id.length > 7);
      }
      console.log(createdFiltered);
      return {
        ...state,
        searchResult: [],
        api: createdFiltered,
        created: createdFiltered,
        games: createdFiltered,
        filter: action.payload,
      };

    case FILTER_BY_GENRE:
      if (!state.searchResult.length) {
        if (state.filter === "all") {
          content = state.allGames;
        }
        if (state.filter === "api") {
          content = state.api;
        }
        if (state.filter === "created") {
          content = state.created;
        }
      } else {
        content = state.searchResult;
      }

      const genreFiltered = content.filter((f) =>
        f.genres.includes(action.payload)
      );

      let res = false;
      if (genreFiltered.length) res = true;

      return {
        ...state,
        games: genreFiltered,
        result: res,
      };

    case SORT_BY_NAME:
      content = state.games;

      let sortName =
        action.payload === "asc" ? content.sort(ab) : content.sort(ba);

      return {
        ...state,
        games: sortName,
      };

    case SORT_BY_RATING:
      content = state.games;

      if (action.payload === "0") {
        sortRating = content.sort(nab);
      }

      if (action.payload === "5") {
        sortRating = content.sort(nba);
      }

      return {
        ...state,
        games: sortRating,
      };

    case ERROR_HANDLER:
      let error = "";
      if (action.payload.length > 0) error = action.payload;

      return {
        ...state,
        error: error,
      };

    default:
      return state;
  }
}
