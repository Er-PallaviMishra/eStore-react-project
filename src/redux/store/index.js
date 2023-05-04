import { createStoreHook } from "react-redux";
import rootReducer from "../reducers";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;