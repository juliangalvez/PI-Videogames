import { ab, ba } from "../js/modules";
import {
  GET_GAMES,
  GET_GENRES,
  GET_GAME_DETAIL,
  GET_SEARCH,
  FILTER_BY_GENRE,
  FILTER_CREATED,
  SORT_BY_NAME,
  SORT_BY_RATING
} from "./constants";

let allGames = 0;

let initialState = {
  games: [],
  allGames: [],
  genres: [],
  detail: [],
  filters: [],
};


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        allGames: action.payload,
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
      };

    case FILTER_BY_GENRE:
      allGames = state.allGames;
      const genreFiltered = allGames.filter((f) =>
        f.genres.includes(action.payload)
      );
      return {
        ...state,
        games: genreFiltered,
      };

    case FILTER_CREATED:
      allGames = state.allGames;

      let createdFiltered;
      if(action.payload === 'all') { createdFiltered = allGames;}
      if(action.payload === 'api') { createdFiltered = allGames.filter((f) => !f.id.length);}
      if(action.payload === 'created') { createdFiltered = allGames.filter((f) => f.id.length > 7);}

      return {
        ...state,
        games: createdFiltered
      };

    case SORT_BY_NAME:
        allGames =state.games;

        console.log(allGames)
        let sortName = action.payload === 'asc' ? allGames.sort(ab) : allGames.sort(ba)
        console.log(sortName)
        return {
            ...state,
            games: sortName
        }

    case SORT_BY_RATING:
        allGames =state.games;

        let sortRating = action.payload === 0 ? allGames.sort((a,b)=> {return a.rating - b.rating}) : allGames.sort((a,b)=> {return a.rating + b.rating})
        console.log(sortRating)
        return {
            ...state,
            games: sortRating
        }

    default:
      return state;
  }
}
