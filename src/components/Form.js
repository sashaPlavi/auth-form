import React from 'react';
import Axios from 'axios';

class Form extends React.Component {
  state = {
    name: '',
    password: '',
    email: '',
  };

  handleSubmit = (e) => {
    //console.log(this.state);
    const data = this.state;
    console.log('bla');
    Axios.post('http://localhost:3333/api/user/register', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Username"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
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
    );
  }
}

export default Form;
