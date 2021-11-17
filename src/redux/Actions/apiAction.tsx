import { ActionType } from "../Types";
import { Dispatch } from "redux";
import { Action } from "../ActionDeclare/index";
import { resolve } from "path";

import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
export const fetchData = (res: any) => {
  return {
    type: ActionType.FETCH_DATA,
    payload: res,
  };
};
export const fetchDataSuccess = () => {
  return {
    type: ActionType.FETCH_DATA_SUCCESS,
  };
};
export const fetchDataFail = (res: any) => {
  return {
    type: ActionType.FETCH_DATA_FAIL,
    payload: res,
  };
};
const URL = "https://618cf07bedab980017fd50d6.mockapi.io/api/v1/user";

const getApi = async () => {
  return await axios.get(URL);
  // .then((response: any) => response.json)
  // .catch((error: any) => {
  //   throw error;
  //}
};
function* fetchUser() {
  try {
    const { data } = yield call(getApi);
    console.log(data);
    yield put({ type: "FETCH_DATA", payload: data });
  } catch (e) {
    console.log("error");
  }
}

function* watchUserSaga() {
  yield takeEvery("FETCH_DATA_SUCCESS", fetchUser);
}

export default watchUserSaga;
