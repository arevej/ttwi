import React, { Component } from 'react';

import Avatar from './Avatar';
import Button from './Button';


import './Header.css';



class Header extends Component {
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
    const { avatarUrl } = this.props;
    return (
      <div className="header">
        <div className="container">
          <div className="left-main-menu">
            <a href="#">🏠 Home</a>
            <a href="#">🔔 Notifications</a>
            <a href="#">✉️ Messages</a>
          </div>
          <div className="logo">
            <a href="#"><img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png" /></a>
          </div>
          <div className="right-main-menu">
            <div>
              <input
                type="text"
                value={this.state.search}
                onChange={this.handleSearchChange}
                placeHolder="Search Twitter"
              />
            </div>
            <a href="#">
              <Avatar avatarUrl={avatarUrl} size={30} />
            </a>
            <Button text="Tweet" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
