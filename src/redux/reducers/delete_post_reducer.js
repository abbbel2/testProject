import { DELETE_POST_REQUEST, POST_DELETED } from "../actions/action_types";

const initial_state = {
    delete_post_data: [],
    loading: true
}

export default function(state = initial_state, action) {
    switch (action.type) {
        case POST_DELETED:
            return {
                delete_post_data: action.res,
                loading: false
            }
        case DELETE_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}