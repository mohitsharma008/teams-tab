import { ActionType } from "../Types/index";
import { Action } from "../ActionDeclare/index";
interface RepositoriesState {
  error: string | null;
  loading: Boolean;
  data: any;
}
const initialState = {
  error: null,
  loading: true,
  data: null,
};

const apiReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.FETCH_DATA:
      return { error: null, loading: false, data: action.payload };
    case ActionType.FETCH_DATA_FAIL:
      return { error: action.payload, loading: false, data: null };

    default:
      return state;
  }
};
export default apiReducer;
