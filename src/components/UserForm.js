import React from "react";
import { Form, } from "semantic-ui-react";

class AccountForm extends React.Component {
  state = { username: "", membershipLevel: "", };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { username, membershipLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Avatar"
          name="Avatar"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const membershipOptions = [
  { key: "b", text: "Mario", value: "Mario", },
  { key: "s", text: "Luigi", value: "Luigi", },
  { key: "g", text: "Zelda", value: "Zelda", },
  { key: "p", text: "Cloud", value: "Cloud", },
];

export default AccountForm;