import React, { Component } from 'react';

import './Button.css';

function Button ({ text }) {
  return (
    <a href="#" className="button">{text}</a>
  )
}

export default Button;
