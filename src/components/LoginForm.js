import React, { Component } from 'react';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>

          <input
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <input
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
