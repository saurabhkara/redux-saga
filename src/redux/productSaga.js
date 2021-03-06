import { call, put, takeEvery } from "redux-saga/effects";


export async function apiCall() {
  let data = await fetch("https://fakestoreapi.com/products");
  data = await data.json();
  //   console.log("api called ", data)
  return data;
}

function* getProductsItem() {
  let data = yield call(apiCall);
  console.log("getProductsItem", data);
  yield put({ type: "UPDATE_ITEM", payload: data });
}

function* productSaga() {
  yield takeEvery("GET_PRODUCT_ITEM", getProductsItem);
}

export default productSaga;
