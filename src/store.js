import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { orderReducer } from "./reducers/orderReducers";
import { productsReducer } from "./reducers/productReducers";

const initialState = {};
const composeEnhanceer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
}), initialState, composeEnhanceer(applyMiddleware(thunk)));

export default store;