import React from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";

const SignUpForm = () => (
  <Form>
    <Form.Field>
      <label>email</label>
      <input placeholder="wolverine@email.com" />
    </Form.Field>
    <Form.Field>
      <label>username</label>
      <input placeholder="woodywolverine" />
    </Form.Field>
    <Form.Field>
      <label>password</label>
      <input placeholder="GoBlue1987" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="Send me cool stuff" />
    </Form.Field>
    <Button type="submit">Let's do this!</Button> 
  </Form>
);

export default SignUpForm;
