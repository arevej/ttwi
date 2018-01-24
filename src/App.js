import React, { Component } from 'react';

import Header from './Header';
import Avatar from './Avatar';
import InputFile from './InputFile';
import Button from './Button';
import {RoundButton} from './Button';
import Tweet from './Tweet';
import * as Icons from 'react-icons/lib/ti';

import './App.css';

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

function WriteTweetInput () {
  return (
    <div>
      <div className className="write-tweet-input">
        <textarea
          style={{ height: '80px', resize: 'none' }}
          value={this.state.typingTweet}
          onChange={this.handleTweetChange}
          placeHolder="What's happening?"
          autoFocus
        />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
          <div>
            <Icons.TiLeaf size={25} color="#aaa"/>
          </div>
          <div onClick={this.hideWriteTweetBlockInput}>⚪️</div>
        </div>
      </div>
      <WriteTweetInputButtons />
    </div>
  )
}

function WriteTweetInputButtons () {
  return (
    <div className="write-tweet-input-buttons">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="square-button">
          <Icons.TiImageOutline size={25} color="#1da1f2"/>
        </div>
        <div className="square-button">
          <Icons.TiArrowRepeat size={25} color="#1da1f2"/>
        </div>
        <div className="square-button">
          <Icons.TiChartBarOutline size={25} color="#1da1f2"/>
        </div>
        <div className="square-button">
          <Icons.TiLocationOutline size={25} color="#1da1f2"/>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <RoundButton />
        <Button text="Tweet" />
      </div>
    </div>
  )
}

function Suggestion ({ name, login, avatarUrl }) {
  return (
    <div className="suggestion">
      <div className="right-side">
        <Avatar avatarUrl={avatarUrl} size={50} />
        <div style={{ marginLeft: '10px' }}>
          <div style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#111', fontWeight: '600', marginRight: '5px' }}>{name}</a>
            <a href="#">@{login}</a>
          </div>
          <Button text="Follow" outline />
        </div>
      </div>
      <a href="#"><Icons.TiTimesOutline size={15} color='#aaa' /></a>
    </div>
  )
}

function Suggestions () {
  return (
    <div className="suggestions">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h2 className="block-title">Who to follow</h2>
        <a href="#" className="link">Refresh</a>
        <a href="#" className="link">View all</a>
      </div>
      <Suggestion
        name="Carmen"
        login="bde2bj"
        avatarUrl="https://static1.squarespace.com/static/58bdb87d9de4bbb44fc07c42/t/58bde81037c581850ec8e182/1488893776529/person2.jpg"
      />
      <Line />
      <Suggestion
        name="Tom"
        login="jbwkje2332"
        avatarUrl="https://cdn.cjr.org/wp-content/uploads/2016/12/Tump_Nixon_Circle-500x500.png"
      />
      <Line />
      <Suggestion
        name="Rodrigo"
        login="2323jbjber"
        avatarUrl="https://buffer-uploads.s3.amazonaws.com/52f3ace2069bd7a639000078/9720993675319bd6756ca1036fc5952d.jpg"
      />
    </div>
  )
}

function Line () {
  return (
    <div className="line" />
  )
}

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

function Footer () {
  return (
    <div className="footer">
      <span>© 2018 Twitter</span>
      <a href="#">About</a>
      <a href="#">Help Center</a>
      <a href="#">Terms</a>
      <a href="#">Privacy policy</a>
      <a href="#">Cookies</a>
      <a href="#">Ads info</a>
      <a href="#">Brand</a>
      <a href="#">Blog</a>
      <a href="#">Status</a>
      <a href="#">Apps</a>
      <a href="#">Jobs</a>
      <a href="#">Marketing</a>
      <a href="#">Buisinesses</a>
      <a href="#">Developers</a>
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
        tweetsCount: 786,
        following: 345,
        followers: 195747,
      },
      tweets: [
        {authorName: "Tom", authorLogin: "knke", authorAvatarUrl: "https://pbs.twimg.com/profile_images/883637729782792193/ygU8MLl2_400x400.jpg", text: "My design course now has 5 hrs of video, 27k words of lessons, 10 really detailed practice project briefs, dozens of source files, a Facebook community, and more on the way. But that's not what makes it worthwhile.", likes: 2, retweets: 5, responses: 4, publishDate: new Date},
        {authorName: "Ann", authorLogin: "rererve223", authorAvatarUrl: "https://cdn.memiah.co.uk/uploads/counselling-directory.org.uk/34428/original/profile_59db51e29d7b1.jpg", text: "If you’re on the fence, you can email me on this page. I’ll be honest about whether the course is right for you. I don’t want your money if the course isn’t useful.", likes: 0, retweets: 2, responses: 0, publishDate: new Date},
        {authorName: "Alex", authorLogin: "77736hhue", authorAvatarUrl: "http://whitenessproject.org/img/11-alex.jpg", text: "You can save $50 on the course for a few more hours. It’s called TheorySprints. Use discount code “theorysprints50”. See more details at this link", likes: 5, retweets: 51, responses: 2, publishDate: new Date},
      ],
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
    const {account, isActiveWriteTweetInput, tweets} = this.state;

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
              tweetsCount={account.tweetsCount}
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
                  <WriteTweetInput />
                ): (
                  <div className="write-tweet-input">
                    <div>{"What's happening?"}</div>
                    <InputFile />
                  </div>
                  )}
              </div>
            </div>
            <div className="timeline">
              {tweets.map(tweet =>
                <Tweet
                  avatarUrl={tweet.authorAvatarUrl}
                  name={tweet.authorName}
                  text={tweet.text}
                  login={tweet.authorLogin}
                  responses={tweet.responses}
                  likes={tweet.likes}
                  retweets={tweet.retweets}
                  publishDate={tweet.publishDate}
                />
              )}
            </div>
          </div>
          <div className="right-column">
            <Suggestions />
            <BlockDownLink
              text="Find people you know"
              icon="TiGroupOutline"
            />
            <Footer />
            <BlockDownLink
              text="Advertise with Twitter"
              icon="TiLink"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
