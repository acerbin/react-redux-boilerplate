
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/auth";

const coomposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store and combine reducers
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }),
        coomposeEnhancers(applyMiddleware(thunk))
    )
    return store;
}
