import { createStore } from "redux";
import InitialState from './initial'
import UIReducer from "./reducers/UIReducer";

function RootReducer(state, action) {
	if(state === undefined) {
		return InitialState;
	}
	
	return {
		ui: UIReducer(state.ui, action)
	}
}

export default createStore(RootReducer);
