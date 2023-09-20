import { combineReducers } from "redux";
import { LoginReducer } from "../Reducer/loginReducer";
import { collectionReducer } from "../Reducer/collectionReducer";
const reducers = combineReducers({
  loginUserDetails: LoginReducer,
  collectionsDetails :collectionReducer
 
});
export default reducers;