import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from "./reducers/RootReducers";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;