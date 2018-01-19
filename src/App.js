import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value })
  };

  render() {
    return (
      <div className="App">
        <div className='header'>
          <div className="main-menu">
            <a href='#'>🏠 Home</a>
            <a href='#'>🔔 Notifications</a>
            <a href='#'>✉️ Messages</a>
          </div>
          <div className="logo">
            <a href='#'><img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png" /></a>
          </div>
          <div>
            <input
              type='text'
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
            <div className="header-profile-image">
            </div>
            <a href='#' className="write-tweet">Tweet</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
