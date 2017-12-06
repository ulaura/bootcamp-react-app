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

  render() {
    return (
      <div>
        <input 
          type="text"
          name="firstName"
          onChange={ this.handleInputChanged}
          value={this.state.firstName}
        />
        <input 
          type="text"
          name="lastName"
          onChange={ this.handleInputChanged }
          value={this.state.lastName}
        />

      </div>
    );
  }
}

export default App;
