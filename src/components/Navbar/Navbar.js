import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React <i className="fab fa-react"></i>
        </h1>
        <div class="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div class="button-wrapper">
          <Link to="/register">
            <Button>Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button to="/login">Login</Button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
