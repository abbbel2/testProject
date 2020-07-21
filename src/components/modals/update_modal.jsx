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
import UpdateModalForm from "../update_post_form";

class UpdatePostModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          centered
          hidden={this.props.hideUpdateModal}
          toggle={this.props.handleUpdateModalClose}
        >
          <ModalHeader>
            <ModalTitle>Update Post</ModalTitle>

            <button outline onClick={this.props.handleUpdateModalClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>

          <ModalBody>
            <UpdateModalForm
              handlePostUpdate={(ee) => console.log(ee)}
              //   loading={this.props.addPostData.loading}
            />
            {/* {this.props.addPostData.add_post_data.length !== 0 ? (
              this.props.addPostData.add_post_data.id === 101 ? (
                <Alert success>Post added</Alert>
              ) : (
                <Alert error>Error occured</Alert>
              )
            ) : null} */}
          </ModalBody>

          <ModalFooter>
            <button onClick={this.props.handleUpdateModalClose}>Close</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdatePostModal;
