import { GET_POST_REQUEST, POST_DATA_FETCHED } from "../actions/action_types";

const initial_state = {
    post_data: [],
    loading: false
}

export default function(state = initial_state, action) {
    switch (action.type) {
        case POST_DATA_FETCHED:
            return {
                post_data: action.res,
                loading: false
            }
        case GET_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}