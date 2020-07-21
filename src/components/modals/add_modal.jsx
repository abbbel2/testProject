import React, { useState, Component } from "react";
import { Alert } from "styled-alert-component";
import { Button, LinkButton } from "styled-button-component";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "styled-modal-component";
import AddPostForm from "../post_form";

class AddPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      success: false,
    };
  }

  render() {
    return (
      <div>
        <Modal
          centered
          hidden={this.props.hide}
          toggle={this.props.handleAddModalClose}
        >
          <ModalHeader>
            <ModalTitle>Add Post</ModalTitle>

            <button outline onClick={this.props.handleAddModalClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>

          <ModalBody>
            <AddPostForm
              handlePostAdd={(ee) => this.props.handle_post_addition(ee)}
              loading={this.props.addPostData.loading}
            />
            {this.props.addPostData.add_post_data.length !== 0 ? (
              this.props.addPostData.add_post_data.id === 101 ? (
                <Alert success>Post added</Alert>
              ) : (
                <Alert error>Error occured</Alert>
              )
            ) : null}
          </ModalBody>

          <ModalFooter>
            <button onClick={this.props.handleAddModalClose}>Close</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddPostModal;
