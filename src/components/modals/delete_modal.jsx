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
          hidden={this.props.hideDeleteModal}
          toggle={this.props.handleDeleteModalClose}
        >
          <ModalHeader>
            <ModalTitle>Delete Post</ModalTitle>

            <button outline onClick={this.props.handleDeleteModalClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>

          <ModalBody>
            {this.props.deletePostData.delete_post_data.length === 0 ||
            this.props.deletePostData.loading ? (
              <p
                style={{
                  left: "50%",
                  top: "50%",
                }}
              >
                loading ...
              </p>
            ) : (
              <p
                style={{
                  left: "50%",
                  top: "50%",
                }}
              >
                Deleted
              </p>
            )}
          </ModalBody>

          <ModalFooter>
            <button onClick={this.props.handleDeleteModalClose}>Close</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddPostModal;
