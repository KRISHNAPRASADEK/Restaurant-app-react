import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./reducers/homeReducer";

const reducers = combineReducers({
  restaurantReducer: homeReducer,
});
const middleware = [thunk];
const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
