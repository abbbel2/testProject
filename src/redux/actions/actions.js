import { GET_POSTS_REQUEST, ADD_POSTS_REQUEST, GET_POST_REQUEST } from "./action_types";

export const get_posts = () => {
    return {
        type: GET_POSTS_REQUEST,
        page: 2
    }
}

export const add_post = (post_data) => {
    return {
        type: ADD_POSTS_REQUEST,
        post_data
    }
}

export const get_post = (post_id) => {
    return {
        type: GET_POST_REQUEST,
        post_id
    }
}