import React, { Component } from 'react';


function Avatar ({ avatarUrl, size = 70, border }) {
  return (
    <img
      src={avatarUrl}
      style={{
        width: size,
        height: size,
        borderRadius: size,
        border: border ? '4px solid #fff' : null,
      }}
    />
  )
}

export default Avatar;
