import React, { Component } from 'react';
import './Trends.css';


function Trends ({ country, trends }) {
  return (
    <div className="trends">
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <h2 className="block-title">{country} trends</h2>
        <a href="#" className="link">Change</a>
      </div>
      {trends.map(trend => (
        <a href="#">{trend}</a>
      ))}
    </div>
  )
}

export default Trends;
