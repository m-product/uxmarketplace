import React from "react";
import { Component } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

<<<<<<< HEAD
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
=======
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      onEmailList: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleButtonPress(e) {
    this.setState((state) => ({
      username: state.username,
      email: state.email,
      password: state.password,
    }));
  }
  handleCheckPress(e) {
    this.setState((state) => ({
      onEmailList: !state.onEmailList,
    }));
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>email</label>
          <input
            // value={this.state.username}
            placeholder="wolverine@email.com"
            required={true}
          />
        </Form.Field>
        <Form.Field>
          <label>username</label>
          <input placeholder="woodywolverine" required={true} />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input placeholder="GoBlue1987" required={true} />
        </Form.Field>
        <Form.Field>
          <Form.Checkbox
            label="Send me cool stuff"
            onClick={this.handleCheckPress}
          />
        </Form.Field>
        <Button type="submit" onClick={this.handleButtonPress}>
          Let's do this!
        </Button>
        {/* axios send form field 1,2,3, and checkbox state  */}
      </Form>
    );
  }
}
>>>>>>> c23d0daeb680561c7c8f0b487e888e87dc1d2a68

export default SignUpForm;
