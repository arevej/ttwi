import React, { Component } from 'react';

import './InputFile.css';

function InputFile ({}) {
  return (
    <div>
      <input
        className="input-file"
        type="file"
        name="file"
        id="file"
      />
      <label for="file">🖼</label>
    </div>
  )
}

export default InputFile;
