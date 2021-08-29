import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import allProductSlice from "./slices/allProductSlice";
import productSlice from "./slices/productSlice";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    allProducts: allProductSlice,
    product: productSlice,
})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({thunk:false}), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga)

export default store;