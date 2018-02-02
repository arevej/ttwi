import React, { Component } from 'react';
import './ProfileInfo.css';

import Avatar from './Avatar';

function ProfileInfo ({ avatarUrl, coverUrl, name, login, tweetsCount, followingCount, followersCount }) {
  return (
    <div className="profile-info">
      <div className="min-cover-pic" style={{ backgroundImage: `url(" ${coverUrl} ")` }}>
      </div>
      <div className="profile-info">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
          <div className="min-profile-pic">
            <a href='#'>
              <Avatar avatarUrl={avatarUrl} border />
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
            <a href="#" className="name">{name}</a>
            <a href="#" className="grey-link">@{login}</a>
          </div>
        </div>
        <div className="num-info">
          <a href="#" className="grey-link">
            <span className="title">
              Tweets
            </span>
            <span className="value">
              {tweetsCount}
            </span>
          </a>
          <a href="#" className="grey-link">
            <span className="title">
              Following
            </span>
            <span className="value">
              {followingCount}
            </span>
          </a>
          <a href="#" className="grey-link">
            <span className="title">
              Followers
            </span>
            <span className="value">
              {followersCount}
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
