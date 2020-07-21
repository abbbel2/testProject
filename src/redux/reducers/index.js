import { combineReducers } from "redux";
import get_posts_reducer from "./get_posts_reducer";
import add_post_reducer from "./add_post_reducer";
import get_post_reducer from "./get_post_reducer";
import update_post_reducer from "./update_post_reducer";
import delete_post_reducer from "./delete_post_reducer";

export default combineReducers({
    post_data: get_posts_reducer,
    add_post_data: add_post_reducer,
    p_data: get_post_reducer,
    update_post_data: update_post_reducer,
    delete_post_data: delete_post_reducer
});