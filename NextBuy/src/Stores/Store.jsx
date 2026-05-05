import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/ProductSlice";
import cartReducer from "../Features/CartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
