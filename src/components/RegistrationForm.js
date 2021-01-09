import React from 'react';
import Axios from 'axios';
import './RegistrationForm.css';

class RegistrationForm extends React.Component {
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
      <div className="reg-form-container">
        <form onSubmit={this.handleSubmit} className="reg-form">
          <h1>Registration</h1>
          <input
            className="input-item"
            placeholder="Username"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
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

export default RegistrationForm;
