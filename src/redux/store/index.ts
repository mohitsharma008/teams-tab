import { createStore, applyMiddleware } from "redux";
import apiReducers from "../Reducers/apiReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/index";
import reducers from "../Combine";
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
