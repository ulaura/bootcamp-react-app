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
      <div className="container">
        <form>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="firstName"
                onChange={this.handleInputChanged}
                value={this.state.firstName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name:</label>
            <div className="col-sm-10">
              <input className="form-control"
                type="text"
                name="lastName"
                onChange={this.handleInputChanged}
                value={this.state.lastName}
              />
            </div>
          </div>
        </form>
        <div>
          <p>{this.buildtheWelcomeMessage()}</p>
        </div>

      </div>
    );
  }
}

export default App;
