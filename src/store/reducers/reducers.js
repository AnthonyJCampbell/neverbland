import { actionCreators } from "../actions/actions";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

const initialState = {

};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators:
            return {
                ...state,
                
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
