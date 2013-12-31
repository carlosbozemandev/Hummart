import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterSlice from "./Reducers/counterReducer";
import cartSlice from "./Reducers/cartReducer";
import productSlice from "./Reducers/productReducer";
import searchSlice from "./Reducers/searchReducer";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    products: productSlice,
    search: searchSlice,
  }, //add reducers here
});

export default store;
