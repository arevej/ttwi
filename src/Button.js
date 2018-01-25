import React, { Component } from 'react';

import './Button.css';

export function RoundButton ({ text }) {
  return (
    <div className="round-button">
      {text}
    </div>
  )
}

function Button ({ text, round, outline, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={"button " + (round ? "button--round " : "") + (outline ? "button--outline" : "")}
    >
      {text}
    </a>
  )
}

export default Button;
