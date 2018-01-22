import React, { Component } from 'react';

import Header from './Header';
import Avatar from './Avatar';
import InputFile from './InputFile';
import Button from './Button';
import {RoundButton} from './Button';

import './App.css';

function ProfileInfo ({ avatarUrl, coverUrl, name, login, tweetsCount, followingCount, followersCount }) {
  return (
    <div className="profile-info">
      <div className="min-cover-pic">
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


function Trends ({ country, trends }) {
  return (
    <div className="trends">
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <h2 className="country">{country} trends</h2>
        <a href="#" className="link">Change</a>
      </div>
      {trends.map(trend => (
        <a href="#">{trend}</a>
      ))}
    </div>
  )
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCountry: 'France',
      typingTweet: '',
      trends: [
        { country: 'France', trends: ["Fredo Santana", "#shutdown", "Zverev", "Michel Serres", "#OrangeELigue1", "Caroline Garcia", "Rudy Gobert", "#E1WE", "Pep Guardiola", "Daryl Impey"]}
      ],
      account: {
        name: 'Tim',
        login: 'timka',
        avatarUrl: 'https://pbs.twimg.com/profile_images/883637729782792193/ygU8MLl2_400x400.jpg',
        coverUrl: 'https://foreignpolicymag.files.wordpress.com/2017/09/gettyimages-142965003.jpg?w=1920&h=920&crop=0,0,540,0',
        tweets: 786,
        following: 345,
        followers: 195747,
      },
      isActiveWriteTweetInput: false,
    };
  }

  handleTweetChange = (event) => {
    this.setState({ typingTweet: event.target.value })
  }

  showWriteTweetBlockInput = () => {
    this.setState({ isActiveWriteTweetInput: true })
  }

  hideWriteTweetBlockInput = () => {
    this.setState({ isActiveWriteTweetInput: this.state.typingTweet == '' ? false : true })
  }


  render() {
    const trends = this.state.trends.find(trends => trends.country === this.state.selectedCountry);
    const {account, isActiveWriteTweetInput} = this.state;

    return (
      <div className="App">
        <Header avatarUrl={account.avatarUrl} />
        <div className="content">
          <div className="left-column">
            <ProfileInfo
              avatarUrl={account.avatarUrl}
              coverUrl={account.coverUrl}
              name={account.name}
              login={account.login}
              tweetsCount={account.tweets}
              followingCount={account.following}
              followersCount={account.followers}
            />
            <Trends
              country={trends.country}
              trends={trends.trends}
            />
          </div>
          <div className="center-column">
            <div className="write-tweet-block">
              <Avatar avatarUrl={account.avatarUrl} size={35} />
              <div onClick={this.showWriteTweetBlockInput} onBlur={this.hideWriteTweetBlockInput}>
                {isActiveWriteTweetInput ? (
                  <div>
                    <div className className="write-tweet-input">
                      <textarea
                        style={{ height: '80px', resize: 'none' }}
                        value={this.state.typingTweet}
                        onChange={this.handleTweetChange}
                        placeHolder="What's happening?"
                        autoFocus
                      />
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '80px'}}>
                        <div>😀</div>
                        <div onClick={this.hideWriteTweetBlockInput}>⚪️</div>
                      </div>
                    </div>
                    <div className="write-tweet-input-buttons">
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="square-button">🖼</div>
                        <div className="square-button">🗾</div>
                        <div className="square-button">📊</div>
                        <div className="square-button">🗺</div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <RoundButton />
                        <Button text="Tweet" />
                      </div>
                    </div>
                  </div>
                ): (
                  <div className="write-tweet-input">
                    <div>{"What's happening?"}</div>
                    <InputFile />
                  </div>
                  )}
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
