import { combineReducers, createStore } from "redux";
import * as exprienceActions from "./actions/cvExperienceActions.js"
import thunk from "redux-thunk"
import reducers from "./reducers"

const store = createStore(reducers);

store.subscribe( () => {
	console.log("store changed", store.getState());
});

store.dispatch(exprienceActions.fetchExprience1());
store.dispatch(exprienceActions.fetchExprience2());

