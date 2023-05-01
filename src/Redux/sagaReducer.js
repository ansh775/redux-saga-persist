import { takeEvery, put } from "redux-saga/effects";
import { ADD, ADDS, GET, GETS } from "./type";

function* addData(value) {
  let data = yield fetch("https://62d647f215ad24cbf2d39b56.mockapi.io/crud", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: value.data }),
  });
  data = yield data.json();
  // console.log("action is called", data);
  yield put({ type: ADDS, data });
}
function* getData(value) {
  let data = yield fetch("https://62d647f215ad24cbf2d39b56.mockapi.io/crud", {
    method: "GET",
  });
  data = yield data.json();
  console.log("action is called", data);
  yield put({ type: GETS, data });
}

function* productSaga() {
  yield takeEvery(ADD, addData);
  yield takeEvery(GET, getData);
}

export default productSaga;
