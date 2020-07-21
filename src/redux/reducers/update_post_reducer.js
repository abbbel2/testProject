import { UPDATE_POST_REQUEST, POST_UPDATED } from "../actions/action_types";

const initial_state = {
    update_post_data: [],
    loading: false
}

export default function(state = initial_state, action) {
    switch (action.type) {
        case POST_UPDATED:
            return {
                update_post_data: action.res,
                loading: false
            }
        case UPDATE_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}