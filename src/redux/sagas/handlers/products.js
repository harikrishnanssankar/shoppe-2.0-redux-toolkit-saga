import { call, put } from "redux-saga/effects";
import { setProduct } from "../../slices/allProductSlice";
import { requestGetProduct } from "../requests/products";

export function* handleGetProduct() {
  try {
    const response = yield call(requestGetProduct);
    const { data } = response;
    yield put(setProduct(data));
  } catch (error) {
    console.log(error);
  }
}