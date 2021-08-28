import axios from "axios";

export function requestGetProduct() {
  return axios.request({
    method: "get",
    url: "https://fakestoreapi.com/products"
  });
}
