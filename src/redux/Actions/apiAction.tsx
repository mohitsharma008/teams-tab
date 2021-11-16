import { ActionType } from "../Types";
import { Dispatch } from "redux";
import axios from "axios";
import { Action } from "../ActionDeclare/index";
import { resolve } from "path";

const fetchSuccess = (res: any) => ({
  type: ActionType.FETCH_DATA,
  payload: res,
});
const fetchFail = (res: any) => ({
  type: ActionType.FETCH_DATA_FAIL,
  payload: res,
});

export const fetchData = (URL: any) => {
  return async (dispatch: Dispatch<Action>) => {
    await axios
      .get(URL)
      .then((res) => dispatch(fetchSuccess(res.data)))
      .catch((err) => dispatch(fetchFail(err.message)));
  };
};
