import { createSlice } from "@reduxjs/toolkit";

const allProductSlice = createSlice({
    name: "allProducts",
    initialState: [],
    reducers: {
        getProducts() { },
        setProduct(state, action) {
            const products = action.payload;
            return products
        },
    }
})

export const { setProduct, getProducts } = allProductSlice.actions;
export default allProductSlice.reducer;