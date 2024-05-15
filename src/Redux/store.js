
import { legacy_createStore } from "redux";
import { reducer as RestaurantReducer}  from "./reducer";
const store=legacy_createStore(RestaurantReducer)
export {store}