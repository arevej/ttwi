import React, { Component } from 'react';
import './Tweet.css';

import Avatar from './Avatar';
import Button from './Button';
import TweetComposer from './TweetComposer';

import * as Icons from 'react-icons/lib/ti';
import moment from 'moment';

class FromNow extends Component {
  state = { date: new Date };

  componentDidMount() {

    this.num = setInterval(() => {
      this.setState({ date: new Date });
    }, 1000);
    console.log(new Date)

  }

  componentWillUnmount() {
    clearInterval(this.num);
  }

  render() {
    const { datetime } = this.props;
    return <span>{moment(datetime).fromNow()}</span>;
  }
}

export function TweetButons ({ responses, retweets, likes, size, onReply, onRetweet, onLike, onMessage}) {

  return (
    <div className="buttons">
      <div className="response-button" onClick={onReply}>
        <Icons.TiMessage size={size} />
        {responses !== 0 ? responses : ''}
      </div>
      <div className="retweet-button" onClick={onRetweet}>
        <Icons.TiArrowRepeat size={size} />
        {retweets !== 0 ? retweets : ''}
      </div>
      <div className="like-button" onClick={onLike}>
        <Icons.TiHeartOutline size={size} />
        {likes !== 0 ? likes : ''}
      </div>
      <div className="mail-button" onClick={onMessage}>
        <Icons.TiMail size={size} />
      </div>
    </div>
  )
}

export function TweetDetails ({ avatarUrl, text, name, login, publishDate }) {
  const rowStyle = { display: 'flex', flexDirection: 'row' }

  return (
    <div style={{ margin: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={rowStyle}>
          <Avatar avatarUrl={avatarUrl} size={50} />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
            <a href="#" style={{ color: '#111', fontWeight: '600', fontSize: '20px' }}>{name}</a>
            <a href="#" style={{ color: '#657786', fontSize: '18px' }}>@{login}</a>
          </div>
        </div>
        <div style={rowStyle}>
          <Button text="Following" long/>
            <a href="#">
              <Icons.TiArrowSortedDown size={25} />
            </a>
        </div>
      </div>
      <div style={{ fontSize: '22px', marginTop: '20px' }}>
        {text}
      </div>
      <div style={{ color: '#657786', margin: '20px 0' }}>
        {moment(publishDate).format('h:m A - D MMM YYYY')}
      </div>
      <TweetButons size={20} />
      <TweetComposer />
    </div>
  )
}

function Tweet ({ avatarUrl, name, login, text, responses, likes, retweets, publishDate, onClick, onReply, onRetweet, onLike, onMessage }) {

  const handleReply = (evt) => {
    evt.stopPropagation();
    onReply();
  }

  const handleRetweet = (evt) => {
    evt.stopPropagation()
    onRetweet();
  }

  const handleLike = (evt) => {
    evt.stopPropagation()
    onLike();
  }

  const handleMessage = (evt) => {
    evt.stopPropagation()
    onMessage();
  }

  return (
    <div className="tweet" onClick={onClick}>
      <Avatar
        avatarUrl={avatarUrl}
        size={50}
      />
      <div style={{ flex: 1 }}>
        <div className="text-block">
          <div className="personal-info">
            <div>
              <a href="#" style={{ color: '#111', fontWeight: '600'}}>{name}</a>
              <a href="#">@{login}</a>
              <span>・</span>
              <a href="#">
                <FromNow datetime={publishDate} />
              </a>
            </div>
            <div>
              <a href="#">
                <Icons.TiArrowSortedDown size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="tweet-text">
          {text}
        </div>
        <TweetButons
          responses={responses}
          likes={likes}
          retweets={retweets}
          size={25}
          onReply={handleReply}
          onRetweet={handleRetweet}
          onLike={handleLike}
          onMessage={handleMessage}
        />
      </div>
    </div>
  )
}

export default Tweet;
