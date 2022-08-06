let initialState = {
    games: [],
    game: [],
    detail: [],
    filters: []
}

export default function rootReducer(state = initialState, action){
     switch (action.type) {
        case "GET_GAMES":
            return {
                ...state,
                games: action.payload
            };
        
        case "GET_GAME_DETAIL":
            return {
                ...state,
                game: action.payload
            }
    
        case "GET_SEARCH":
            return {
                ...state,
                games: action.payload
            }
        default:
            return state;
     };
}