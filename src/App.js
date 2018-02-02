import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Avatar from './Avatar';
import InputFile from './InputFile';
import Button from './Button';
import Tweet from './Tweet';
import TweetComposer from './TweetComposer';
import Modal from './Modal';
import ProfileInfo from './ProfileInfo';
import Footer from './Footer';
import Suggestions from './Suggestions';
import BlockDownLink from './Links';
import Trends from './Trends';

import { RoundButton } from './Button';
import { TweetButons } from './Tweet';
import { TweetDetails } from './Tweet';

import * as Icons from 'react-icons/lib/ti';
import moment from 'moment';

function Timeline ({ tweets, onClick, onReply, onRetweet, onLike, onMessage }) {
  return (
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
          onClick={() => onClick(tweet.id)}
          onReply={() => onReply(tweet.id)}
          onRetweet={() => onRetweet(tweet.id)}
          onLike={() => onLike(tweet.id)}
          onMessage={() => onMessage(tweet.id)}
        />
      )}
    </div>
  )
}

class App extends Component {
  state = {
    selectedCountry: 'France',
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
      { id: 1, authorName: "Tom", authorLogin: "knke", authorAvatarUrl: "https://pbs.twimg.com/profile_images/883637729782792193/ygU8MLl2_400x400.jpg", text: "My design course now has 5 hrs of video, 27k words of lessons, 10 really detailed practice project briefs, dozens of source files, a Facebook community, and more on the way. But that's not what makes it worthwhile.", likes: 2, retweets: 5, responses: 4, publishDate: new Date },
      { id: 2, authorName: "Ann", authorLogin: "rererve223", authorAvatarUrl: "https://cdn.memiah.co.uk/uploads/counselling-directory.org.uk/34428/original/profile_59db51e29d7b1.jpg", text: "If you’re on the fence, you can email me on this page. I’ll be honest about whether the course is right for you. I don’t want your money if the course isn’t useful.", likes: 0, retweets: 2, responses: 0, publishDate: new Date },
      { id: 3, authorName: "Alex", authorLogin: "77736hhue", authorAvatarUrl: "http://whitenessproject.org/img/11-alex.jpg", text: "You can save $50 on the course for a few more hours. It’s called TheorySprints. Use discount code “theorysprints50”. See more details at this link", likes: 5, retweets: 51, responses: 2, publishDate: new Date },
    ],
    shownTweetId: null,
  };

  handleShowModal = (id) => {
    this.setState({ shownTweetId: id })
  }

  postTweet = (text) => {
    const {account, tweets} = this.state;
    const nextId = tweets[tweets.length-1].id + 1;
    const newTweet = {id: nextId, authorName: account.name, authorLogin: account.login, authorAvatarUrl: account.avatarUrl, text: text, likes: 0, retweets: 0, responses: 0, publishDate: new Date}
    const newTweets = [newTweet, ...tweets];
    this.setState({ tweets: newTweets })
  }

  hideModal = () => {
    this.setState({ shownTweetId: null })
  }

  handleReply = (tweetId) => {
    alert('Replying to tweet ID ' + tweetId);
  }

  handleRetweet = (tweetId) => {
    const newTweets = this.state.tweets.map(tweet => {
      if (tweet.id === tweetId) {
        return { ...tweet, retweets: tweet.retweets + 1 };
      }
      return tweet;
    });
    this.setState({ tweets: newTweets })
  }

  handleLike = (tweetId) => {
    const newTweets = this.state.tweets.map(tweet => tweet.id == tweetId ? tweet.likes + 1 : tweet)
    this.setState({ tweets: newTweets })
  }

  handleMessage = (tweetId) => {
    alert('Message tweet ID ' + tweetId);
  }

  render() {
    const trends = this.state.trends.find(trends => trends.country === this.state.selectedCountry);
    const { account, isActiveWriteTweetInput, tweets, shownTweetId } = this.state;
    const tweetModal = shownTweetId != null ? this.state.tweets.find(tweet => tweet.id === shownTweetId) : null;

    return (
      <div className="App">
        {shownTweetId ? (
          <Modal onClose={this.hideModal}>
            <TweetDetails
              avatarUrl={tweetModal.authorAvatarUrl}
              name={tweetModal.authorName}
              text={tweetModal.text}
              login={tweetModal.authorLogin}
              responses={tweetModal.responses}
              likes={tweetModal.likes}
              retweets={tweetModal.retweets}
              publishDate={tweetModal.publishDate}
            />
          </Modal>
        ) : null}

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
            <TweetComposer
              avatarUrl={account.avatarUrl}
              onPost={this.postTweet}
            />

            <Timeline
              tweets={tweets}
              onClick={this.handleShowModal}
              onReply={this.handleReply}
              onRetweet={this.handleRetweet}
              onLike={this.handleLike}
              onMessage={this.handleMessage}
            />
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
