import { ActionType } from "../Types";
import { Dispatch } from "redux";
import axios from "axios";
import { Action } from "../ActionDeclare/index";
import { resolve } from "path";

const fetchSuccess = (res: any) => ({
  type: ActionType.FETCH_DATA,
  payload: res,
});

export const fetchData = () => {
  return async (dispatch: Dispatch<Action>) => {
    await axios
      .get("https://618cf07bedab980017fd50d6.mockapi.io/api/v1/user")
      .then((res) => dispatch(fetchSuccess(res.data)))
      .catch((err) => console.log(err));
  };
};
