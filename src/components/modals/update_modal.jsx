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
            {this.props.postData.post_data.length === 0 ||
            this.props.postData.loading ? (
              <p>loading ....</p>
            ) : (
              <UpdateModalForm
                form_data={this.props.postData.post_data}
                handlePostUpdate={(form_data, post_id) =>
                  this.props.handlePostUpdateApp(form_data, post_id)
                }
                loading={this.props.updateData.loading}
              />
            )}
            {this.props.updateData.update_post_data.length !== 0 ? (
              this.props.updateData.update_post_data ? (
                <Alert success>Post updated</Alert>
              ) : (
                <Alert error>Error occured!</Alert>
              )
            ) : null}
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
