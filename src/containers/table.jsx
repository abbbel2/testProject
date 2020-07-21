import React from "react";
import { Table, Tr } from "styled-table-component";
import { Button, LinkButton } from "styled-button-component";
import { Column, Row } from "styled-grid-system-component";

function customTable(props) {
  return (
    <Table hoverable>
      <caption>
        <Row>
          <Column xs={10}>
            <h1>List of posts</h1>
          </Column>
          <Column xs={2} style={{ paddingTop: 12 }}>
            <Button m1 warning onClick={props.openAddPostsModal}>
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
        {props.postData.data.map((post, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <Button m1 info sm onClick={props.openUpdatePostModal}>
                Update
              </Button>
              <Button m1 danger sm>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default customTable;
