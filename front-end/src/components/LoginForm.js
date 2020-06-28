import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="violet" textAlign="center">
        <Image src={require("../assets/m128.png")} /> Log in to your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Wolverine@email.com"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="GoBlue1987"
            type="password"
          />

          <Button color="violet" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New here? <a href="/signup">Join the Design Community</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
