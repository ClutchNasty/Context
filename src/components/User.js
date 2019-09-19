import React from "react";
import { Card, } from "semantic-ui-react";

const User = () => (
  <Card>
    <Card.Content>
      <Card.Header>Email:</Card.Header>
      <Card.Meta>
       FirstName:
       <br />
       LastName:
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Avatar:</p>
    </Card.Content>
  </Card>
)

export default User;