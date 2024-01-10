import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeProduct: (state, action) => {
            state.items.filter((item) => item !== action.payload)
        }
    }
})

export const { addProduct, removeProduct } = basketSlice.actions
export const basketReducer = basketSlice.reducer