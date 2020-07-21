import React from "react";
import Table from "./containers/table";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  get_posts,
  add_post,
  get_post,
  update_post,
  delete_post,
} from "./redux/actions/actions";
import AddModal from "./components/modals/add_modal";
import UpdateModal from "./components/modals/update_modal";
import DeleteModal from "./components/modals/delete_modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide_add_modal: true,
      hide_update_modal: true,
      hide_delete_modal: true,
    };

    this.handle_add_post = this.handle_add_post.bind(this);
    this.handle_get_post = this.handle_get_post.bind(this);
    this.handle_post_update = this.handle_post_update.bind(this);
    this.handle_post_delete = this.handle_post_delete.bind(this);
  }

  handle_add_post = (form_data) => {
    this.props.add_post(form_data);
  };

  handle_get_post = (post_id) => {
    this.setState({ hide_update_modal: false });
    this.props.get_post(post_id);
  };

  handle_post_update = (post_data, post_id) => {
    this.props.update_post(post_data, post_id);
    // console.log(post_data.body + " " + post_id);
  };

  handle_post_delete = (post_id) => {
    this.setState({ hide_delete_modal: false });
    this.props.delete_post(post_id);
  };

  componentDidMount() {
    this.props.get_posts();
  }

  render() {
    console.log(this.props.delete_post_data);
    return (
      <div>
        {" "}
        {this.props.posts.data.length === 0 ? (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            Loading...{" "}
          </h1>
        ) : (
          <Table
            postData={this.props.posts}
            openAddPostsModal={() => this.setState({ hide_add_modal: false })}
            openUpdatePostModal={() =>
              this.setState({ hide_update_modal: false })
            }
            handleGetPost={this.handle_get_post}
            handlePostDelete={this.handle_post_delete}
          />
        )}
        <AddModal
          hide={this.state.hide_add_modal}
          handleAddModalClose={() => this.setState({ hide_add_modal: true })}
          handle_post_addition={this.handle_add_post}
          addPostData={this.props.add_post_data}
        />{" "}
        <UpdateModal
          hideUpdateModal={this.state.hide_update_modal}
          handleUpdateModalClose={() =>
            this.setState({ hide_update_modal: true })
          }
          postData={this.props.post}
          handlePostUpdateApp={this.handle_post_update}
          updateData={this.props.update_post_data}
        />{" "}
        <DeleteModal
          hideDeleteModal={this.state.hide_delete_modal}
          handleDeleteModalClose={() =>
            this.setState({ hide_delete_modal: true })
          }
          deletePostData={this.props.delete_post_data}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.post_data,
  post: state.p_data,
  add_post_data: state.add_post_data,
  update_post_data: state.update_post_data,
  delete_post_data: state.delete_post_data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { get_posts, add_post, get_post, update_post, delete_post },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
