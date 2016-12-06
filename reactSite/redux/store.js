import { combineReducers, createStore } from "redux";
import axios from "axios";
import thunk from "redux-thunk"
import reducers from "./reducers"

const store = createStore(reducers);

store.subscribe( () => {
	console.log("store changed", store.getState());
});

store.dispatch({type: "abc"});

