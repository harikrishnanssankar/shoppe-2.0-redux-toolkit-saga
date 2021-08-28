import { takeLatest } from "redux-saga/effects"
import { getProducts } from "../slices/allProductSlice"
import { handleGetProduct } from "./handlers/products"

export function* watcherSaga(){
    yield takeLatest(getProducts.type, handleGetProduct)
}