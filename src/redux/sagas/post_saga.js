import { GET_POSTS_REQUEST, POSTS_DATA_FETCHED, ADD_POSTS_REQUEST, POST_ADDED } from "../actions/action_types";
import { takeEvery, put } from "redux-saga/effects";

// this is the get all posts saga
function* returnActions(action) {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json());
        yield put({ type: POSTS_DATA_FETCHED, res: response });
    } catch (e) {
        console.log("request failed!");
        console.log(e);
    }
}

export function* getUsersWatcher() {
    yield takeEvery(GET_POSTS_REQUEST, returnActions);
}


// this.is the add post saga
function* addPostWorker(action) {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(action.post_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = yield response.json();
        yield put({ type: POST_ADDED, res: data });
    } catch (e) {
        console.log("request failed!");
        console.log(e);
    }
}

export function* addPostWatcher() {
    yield takeEvery(ADD_POSTS_REQUEST, addPostWorker);
}


// this is the get post by id saga
function* addPostWorker(action) {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(action.post_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = yield response.json();
        yield put({ type: POST_ADDED, res: data });
    } catch (e) {
        console.log("request failed!");
        console.log(e);
    }
}

export function* addPostWatcher() {
    yield takeEvery(ADD_POSTS_REQUEST, addPostWorker);
}