import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{},
    reducers:{
        selectedProduct(state, action){
            const products = action.payload;
            return {...state, ...products}
        },
        removeSelectedProduct(){
            return {}
        }

    }
})

export const { selectedProduct, removeSelectedProduct } = productSlice.actions;
export default productSlice.reducer