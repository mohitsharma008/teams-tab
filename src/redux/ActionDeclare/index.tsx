import { ActionType } from "../Types/index";
interface FetchData {
  type: ActionType.FETCH_DATA;
  payload: any;
}
interface FetchDataFail {
  type: ActionType.FETCH_DATA_FAIL;
  payload: any;
}
export type Action = FetchData | FetchDataFail;
