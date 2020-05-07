import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

import { postReducer } from "./reducers/postReducer";

const rootReducer = combineReducers({
    posts: postReducer
});

export default createStore(rootReducer, applyMiddleware(ReduxThunk));