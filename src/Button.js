import React, { Component } from 'react';

import './Button.css';

export function RoundButton ({ text }) {
  return (
    <div className="round-button">
      {text}
    </div>
  )
}

function Button ({ text, round, outline, long, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={"button " + (round ? "button--round " : "") + (outline ? "button--outline" : "") + (long ? "button--long" : "")}
    >
      {text}
    </a>
  )
}

export default Button;
