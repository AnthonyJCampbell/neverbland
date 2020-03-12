import { actionCreators } from "../actions/actions";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

const initialState = {
    episodes: [],
    episode_ids: {},
    selectedCountry: "us",
    
    showInfo: {},
    seasons: [],
    seasonEpisodes: [],
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.FETCH_EPISODES:
            return {
                ...state,
                episodes: state.episodes.concat(action.episodes)
            };

        case actionCreators.OVERRIDE_EPISODES:
            return {
                ...state,
                episodes: action.episodes
            };

        case actionCreators.SELECTING_COUNTRY:
            return {
                ...state,
                selectedCountry: action.selectedCountry
            };

        case actionCreators.FETCH_SHOW_INFO:
            return {
                ...state,
                showInfo: action.showInfo,
                seasons: action.showInfo._embedded.seasons,
            };

        case actionCreators.FETCH_SEASON_EPISODES:
            return {
                ...state,
                seasonEpisodes: action.seasonEpisodes
            };


        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    reducer: myReducer,
});

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
