import React from "react";
import { Component } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

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

export default SignUpForm;
