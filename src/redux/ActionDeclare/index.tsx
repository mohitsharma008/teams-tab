import { ActionType } from "../Types/index";
interface FetchData {
  type: ActionType.FETCH_DATA;
  payload: any;
}
export type Action = FetchData;
