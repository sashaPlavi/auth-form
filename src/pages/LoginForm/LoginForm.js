import React, { Component } from 'react';
import Axios from 'axios';
import './LoginForm.css';

export default class LoginForm extends Component {
  state = {
    password: '',
    email: '',
  };
  handleSubmit = (e) => {
    //console.log(this.state);
    const data = this.state;
    console.log('bla');
    Axios.post('http://localhost:3333/api/user/login', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.preventDefault();
  };
  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form ">
          <h1>Login</h1>

          <input
            className="input-item"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <input
            className="input-item"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <input className="input-btn-item" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
