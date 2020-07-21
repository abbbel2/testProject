import { combineReducers } from "redux";
import get_posts_reducer from "./get_posts_reducer";
import add_post_reducer from "./add_post_reducer";
import get_post_reducer from "./get_post_reducer";

export default combineReducers({
    post_data: get_posts_reducer,
    add_post_data: add_post_reducer,
    p_data: get_post_reducer
});