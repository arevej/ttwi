import React, { Component } from 'react';
import './Links.css';

import * as Icons from 'react-icons/lib/ti';

function BlockDownLink ({ text, icon }) {
  const Icon = Icons[icon];
  return (
    <div className="block-down-link">
      <a href="#">
        <Icon size={15} />
        {text}
      </a>
    </div>
  )
}

export default BlockDownLink;
