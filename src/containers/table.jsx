import React, { Component } from "react";
import { Table, Tr } from "styled-table-component";
import { Button, LinkButton } from "styled-button-component";
import { Column, Row } from "styled-grid-system-component";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { get_post } from "../redux/actions/actions";

class CustomTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.getPost = this.getPost.bind(this);
  // }

  // getPost = (post_id) => {
  //   this.props.get_post(post_id);
  // };

  render() {
    // console.log(this.props.post);
    return (
      <Table hoverable>
        <caption>
          <Row>
            <Column xs={10}>
              <h1>List of posts</h1>
            </Column>
            <Column xs={2} style={{ paddingTop: 12 }}>
              <Button m1 warning onClick={this.props.openAddPostsModal}>
                Add
              </Button>
            </Column>
          </Row>
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.postData.data.map((post, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <Button
                  m1
                  info
                  sm
                  onClick={() => this.props.handleGetPost(post.id)}
                >
                  Update
                </Button>
                <Button
                  m1
                  danger
                  sm
                  onClick={() => this.props.handlePostDelete(post.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

// const mapStateToProps = (state) => ({
//   post: state.p_data,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ get_post }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);

export default CustomTable;
