import { all, fork } from "redux-saga/effects";
import { getUsersWatcher, addPostWatcher, getPostWatcher, updatePostWatcher, deletePostWatcher } from "./post_saga";

export default function* rootSaga() {
    yield all([
        fork(getUsersWatcher),
        fork(addPostWatcher),
        fork(getPostWatcher),
        fork(updatePostWatcher),
        fork(deletePostWatcher)
    ])
}