import { GET_POSTS_REQUEST, POSTS_DATA_FETCHED, ADD_POSTS_REQUEST, POST_ADDED, GET_POST_REQUEST, POST_DATA_FETCHED, UPDATE_POST_REQUEST, POST_UPDATED, DELETE_POST_REQUEST, POST_DELETED } from "../actions/action_types";
import { takeEvery, put, takeLatest } from "redux-saga/effects";

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
    yield takeLatest(GET_POSTS_REQUEST, returnActions);
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
    yield takeLatest(ADD_POSTS_REQUEST, addPostWorker);
}


// this is the get post by id saga
function* getPostWorker(action) {
    try {
        const responsee = yield fetch(`https://jsonplaceholder.typicode.com/posts/${action.post_id}`).then(res => res.json());
        yield put({ type: POST_DATA_FETCHED, post_res: responsee });
    } catch (e) {
        console.log("request failed!");
        console.log(e);
    }
}

export function* getPostWatcher() {
    yield takeLatest(GET_POST_REQUEST, getPostWorker);
}


// this is the update post saga
function* updatePostWorker(action) {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${action.post_id}`, {
            method: 'PUT',
            body: JSON.stringify(action.post_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = yield response.json();
        yield put({ type: POST_UPDATED, res: data });
    } catch (e) {
        console.log("request failed!");
        console.log(e);
    }
}

export function* updatePostWatcher() {
    yield takeLatest(UPDATE_POST_REQUEST, updatePostWorker);
}


// this is the delete post saga
function* deletePostWorker(action) {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${action.post_id}`, {
            method: 'DELETE',
        });
        const data = yield response.json();
        yield put({ type: POST_DELETED, res: data });
    } catch (e) {
        console.log("request failed!");
        console.log(e);
    }
}

export function* deletePostWatcher() {
    yield takeLatest(DELETE_POST_REQUEST, deletePostWorker);
}