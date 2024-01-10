import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsSlice";
import { basketReducer } from "./basketSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        basket: basketReducer
    }
})