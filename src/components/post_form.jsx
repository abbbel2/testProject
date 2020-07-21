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
  const [formData, setFormData] = useState({ title: "", body: "", userId: 1 });

  const handleAddPostFormChange = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData(formData);
  };

  const passData = (e) => {
    e.preventDefault();
    props.handlePostAdd(formData);
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
            onChange={handleAddPostFormChange}
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
            onChange={handleAddPostFormChange}
          />
        </label>
      </FormGroup>
      {/* <FormCheck>
        <label>
          <FormCheckInput type="checkbox" /> Check me out
        </label>
      </FormCheck> */}
      <FormGroup>
        {/* {props.loading ? (
          <p>loading ...</p>
        ) : ( */}
        <Button block primary onClick={passData}>
          Add
        </Button>
        {/* )} */}
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
