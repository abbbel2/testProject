import React from "react";
import Table from "./containers/table";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get_posts, add_post } from "./redux/actions/actions";
import AddModal from "./components/modals/add_modal";
import UpdateModal from "./components/modals/update_modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide_add_modal: true,
      hide_update_modal: true,
    };

    this.handle_add_post = this.handle_add_post.bind(this);
  }

  handle_add_post = (form_data) => {
    this.props.add_post(form_data);
  };

  componentDidMount() {
    this.props.get_posts();
  }

  render() {
    console.log(this.props.add_post_data);
    return (
      <div>
        {this.props.posts.data.length === 0 ? (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            Loading ...
          </h1>
        ) : (
          <Table
            postData={this.props.posts}
            openAddPostsModal={() => this.setState({ hide_add_modal: false })}
            openUpdatePostModal={() =>
              this.setState({ hide_update_modal: false })
            }
          />
        )}

        <AddModal
          hide={this.state.hide_add_modal}
          handleAddModalClose={() => this.setState({ hide_add_modal: true })}
          handle_post_addition={this.handle_add_post}
          addPostData={this.props.add_post_data}
        />
        <UpdateModal
          hideUpdateModal={this.state.hide_update_modal}
          handleUpdateModalClose={() =>
            this.setState({ hide_update_modal: true })
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.post_data,
  add_post_data: state.add_post_data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ get_posts, add_post }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
