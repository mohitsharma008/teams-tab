import { combineReducers } from "redux";
import apiReducer from "./Reducers/apiReducer";
const reducers = combineReducers({
  repositories: apiReducer,
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;
