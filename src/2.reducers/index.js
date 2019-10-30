import TodoReducer from "./TodoReducer";
import { combineReducers } from "redux";

export default combineReducers({
    todo : TodoReducer
})