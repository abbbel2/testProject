import React, { useState } from "react";
import { Button } from "styled-button-component";
import { Column } from "styled-grid-system-component";
import {
  FormCheck,
  FormCheckInput,
  FormControl,
  FormControlFile,
  FormControlPlainText,
  FormGroup,
  FormInline,
  FormText,
} from "styled-form-component";

export default function postForm(props) {
  // const [postId, setPostId] = useState(props.form_data.id);
  // const [formData, setFormData] = useState({
  //   title: props.form_data.title,
  //   body: props.form_data.body,
  //   userId: 1,
  // });
  const [title, setTitle] = useState(props.form_data.title);
  const [body, setBody] = useState(props.form_data.body);

  // const handleAddPostFormChange = (e) => {
  //   formData[e.target.name] = e.target.value;
  //   setFormData(formData);
  // };

  const passUpdateData = (e) => {
    e.preventDefault();
    props.handlePostUpdate(
      { id: props.form_data.id, title, body, userId: 1 },
      props.form_data.id
    );
  };

  return (
    <form>
      <FormGroup>
        <label>
          Title{" "}
          <FormControl
            nam
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {/* <FormText muted>
          We&#39;ll never share your email with anyone else.
        </FormText> */}
      </FormGroup>
      <FormGroup>
        <label>
          Description
          <FormControl
            textarea
            rows="3"
            name="body"
            placeholder="Enter description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
      </FormGroup>
      {/* <FormCheck>
        <label>
          <FormCheckInput type="checkbox" /> Check me out
        </label>
      </FormCheck> */}
      <FormGroup>
        {props.loading ? (
          <p>loading ...</p>
        ) : (
          <Button block primary onClick={passUpdateData}>
            Update
          </Button>
        )}
      </FormGroup>
    </form>
  );
}

// const MyInputGroupComponent = (props) => (
//   <InputGroup>
//     <InputGroupPrepend>
//       <InputGroupText>@</InputGroupText>
//     </InputGroupPrepend>
//     <FormControl type="text" placeholder="Username" />
//   </InputGroup>
// );
