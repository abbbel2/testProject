import { POSTS_DATA_FETCHED, POST_ADDED } from "../actions/action_types";

const initial_state = { add_post_data: [], loading: false }

export default function(state = initial_state, action) {
    switch (action.type) {
        case POST_ADDED:
            return {
                add_post_data: action.res,
                loading: false
            }
        case POSTS_DATA_FETCHED:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}