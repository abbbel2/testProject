import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import AllReducer from "../reducers";
import rootSaga from "../sagas/index"

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const initialState = {};

const store = createStore(
    AllReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;