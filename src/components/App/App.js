import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  state = {
    firstName: "",
    lastName: ""
  }

  handleInputChanged = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  buildtheWelcomeMessage = () => {
    const {
      firstName,
      lastName
    } = this.state;

    let welcomeMessage;
    if (firstName) {
      welcomeMessage = `Welcome, ${firstName} `;
    }

    if (lastName) {
      if (!welcomeMessage) {
        welcomeMessage = "Welcome, ";
      }
      // this adds the last name to the welcome message
      // this also defaults to last name if no first name is present
      welcomeMessage += lastName;
    }

    // this takes away the space at the end of the first name in the initial welcome message
    // and adds an exlcamation point after the first name if no last name exists
    if (welcomeMessage) {
      welcomeMessage = welcomeMessage.trim() + "!";
    }

    return welcomeMessage;
  }

  render() {

    return (
      <div>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text"
            name="firstName"
            onChange={this.handleInputChanged}
            value={this.state.firstName}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text"
            name="lastName"
            onChange={this.handleInputChanged}
            value={this.state.lastName}
          />
        </form>
        <div>
          <p>{this.buildtheWelcomeMessage()}</p>
        </div>

      </div>
    );
  }
}

export default App;
