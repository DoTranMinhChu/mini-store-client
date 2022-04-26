import { combineReducers } from "redux";

import products from "./products";
import carts from "./carts";
import auth from "./auth";

export default combineReducers({
    products,
    carts,
    auth
})