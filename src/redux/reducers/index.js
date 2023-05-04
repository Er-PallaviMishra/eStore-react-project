import { combineReducers } from "redux";
import { topMenu } from "./TopMenu";
import {product} from "./Product";

const rootReducer= combineReducers({
    topMenu,
    product
})
export default rootReducer;