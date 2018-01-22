import React, { Component } from 'react';

import './Button.css';

export function RoundButton () {
  return (
    <div className="round-button">
      ＋
    </div>
  )
}

function Button ({ text, round, outline }) {
  return (
    <a href="#" className={"button " + (round ? "button--round " : "") + (outline ? "button--outline" : "")}>{text}</a>
  )
}

export default Button;
