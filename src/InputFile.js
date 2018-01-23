import React, { Component } from 'react';

import * as Icons from 'react-icons/lib/ti';

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
      <label for="file">
        <Icons.TiImageOutline size={25} />
      </label>
    </div>
  )
}

export default InputFile;
