import React, { Component } from 'react';
import './TweetComposer.css';

import Avatar from './Avatar';
import InputFile from './InputFile';
import Button from './Button';
import Tweet from './Tweet';

import { RoundButton } from './Button';

import * as Icons from 'react-icons/lib/ti';

class TweetComposer extends Component {
  state = {
    typingText: '',
    isActiveInput: false,
  }

  handleTweetChange = (event) => {
    this.setState({ typingText: event.target.value })
  }

  showTweetInput = () => {
    this.setState({ isActiveInput: true })
  }

  hideTweetInput = () => {
    this.setState({ isActiveInput: false })
  }

  handlePost = () => {
    this.props.onPost(this.state.typingText);
    this.setState({ typingText: '' })
  }

  handleChildClick = (evt) => {
    evt.stopPropagation();
  }

  addGIF = () => {
    alert('Choose a GIF')
  }

  addPoll = () => {
    alert('Create a poll')
  }

  addLocation = () => {
    alert('Add your location')
  }

  render () {
    return (
      <div className="write-tweet-block">
        <Avatar avatarUrl={this.props.avatarUrl} size={35} />
        <div>
          {this.state.isActiveInput || this.state.typingText !== '' ? (
            <div>
              <div className className="write-tweet-input">
                <textarea
                  style={{ height: '80px', resize: 'none' }}
                  value={this.state.typingText}
                  onChange={this.handleTweetChange}
                  onBlur={this.hideTweetInput}
                  placeHolder="What's happening?"
                  autoFocus
                />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
                  <div>
                    <Icons.TiLeaf size={25} color="#aaa"/>
                  </div>
                  <div>⚪️</div>
                </div>
              </div>
              <div className="write-tweet-input-buttons">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div className="square-button">
                    <InputFile />
                  </div>
                  <div className="square-button" onClick={this.addGIF} >
                    <Icons.TiThLargeOutline size={25} />
                  </div>
                  <div className="square-button" onClick={this.addPoll}>
                    <Icons.TiChartBarOutline size={25} />
                  </div>
                  <div className="square-button" onClick={this.addLocation}>
                    <Icons.TiLocationOutline size={25} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <RoundButton text="＋" />
                  <Button text="Tweet" onClick={this.handlePost} />
                </div>
              </div>
            </div>
          ) : (
            <div className="write-tweet-input" onClick={this.showTweetInput}>
              <div>{"What's happening?"}</div>
              <div onClick={this.handleChildClick} >
                <InputFile />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TweetComposer;
