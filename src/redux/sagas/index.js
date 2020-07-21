import { all } from "redux-saga/effects";
import { getUsersWatcher, addPostWatcher } from "./post_saga";

export default function* rootSaga() {
    yield all([
        getUsersWatcher(),
        addPostWatcher()
    ])
}