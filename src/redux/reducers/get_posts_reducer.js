import { GET_POSTS_REQUEST, POSTS_DATA_FETCHED } from "../actions/action_types";

const initial_state = {
    data: [],
    loading: false
}

export default function(state = initial_state, action) {
    switch (action.type) {
        case POSTS_DATA_FETCHED:
            return {
                data: action.res,
                loading: false
            }
        case GET_POSTS_REQUEST:
            return {...state, loading: true }
        default:
            return state;
    }
}