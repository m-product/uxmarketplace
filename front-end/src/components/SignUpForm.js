import React from "react";
import { Component } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    
    this.state = {
      username: "",
      fullname: "",
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
  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleButtonPress(e) { 
    e.preventDefault();

    const user = {
      username: this.state.username,
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: "",
      fullname: "",
      email: "",
      password: "",
    });
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
            placeholder="wolverine@email.com"
            required={true}
            onChange={this.onChangeEmail}
          />
        </Form.Field>
        <Form.Field>
          <label>username</label>
          <input
            placeholder="woodywolverine" 
            required={true} 
            onChange={this.onChangeUsername}
          />
        </Form.Field>
        <Form.Field>
          <label>fullname</label>
          <input
            placeholder="Woody Wolverine"
            required={true}
            onChange={this.onChangeFullname}
          />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input 
            placeholder="GoBlue1987" 
            required={true}
            onChange={this.onChangePassword}
            />
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
