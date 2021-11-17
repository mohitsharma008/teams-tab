import { all } from "@redux-saga/core/effects";
import watchUserSaga from "../Actions/apiAction";

export default function* rootSaga() {
  yield all([watchUserSaga()]);
}
