import { combineReducers } from "redux";
import { topMenu } from "./TopMenu";
import {product} from "./Product";
import * as cart from "./cart/Cart";
const rootReducer= combineReducers({
    topMenu,
    product,
    ...cart
})
export default rootReducer;