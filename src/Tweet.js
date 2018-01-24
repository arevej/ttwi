import React, { Component } from 'react';

import * as Icons from 'react-icons/lib/ti';
import moment from 'moment';

import Avatar from './Avatar';

import './Tweet.css';

class FromNow extends Component {
  state = { date: new Date };

  componentDidMount() {

    this.num = setInterval(() => {
      this.setState({ date: new Date });
    }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.num);
  }

  render() {
    const { datetime } = this.props;
    return <span>{moment(datetime).fromNow()}</span>;
  }
}

function Tweet ({ avatarUrl, name, login, text, responses, likes, retweets, publishDate }) {
  return (
    <div className="tweet">
      <Avatar
        avatarUrl={avatarUrl}
        size={50}
      />
      <div>
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
        <div className="buttons">
          <div className="response-button">
            <Icons.TiBook size={25} />
            {responses !== 0 ? responses : ''}
          </div>
          <div className="retweet-button">
            <Icons.TiArrowRepeat size={25} />
            {retweets !== 0 ? retweets : ''}
          </div>
          <div className="like-button">
            <Icons.TiHeartOutline size={25} />
            {likes !== 0 ? likes : ''}
          </div>
          <div className="mail-button">
            <Icons.TiMail size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet;
