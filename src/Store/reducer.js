import { combineReducers } from "redux";
import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  todosReducer: todoSlice,
});

export default rootReducer;
