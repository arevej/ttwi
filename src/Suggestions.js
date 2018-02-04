import React, { Component } from 'react';
import './Suggestions.css';

import Avatar from './Avatar';
import Button from './Button';
import BlockDownLink from './Links';

import * as Icons from 'react-icons/lib/ti';

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

function Line () {
  return (
    <div className="line" />
  )
}

class Suggestions extends Component {
  state = {
    suggestions: [
      { name: "Carmen", login: "bde2bj", avatarUrl: "https://static1.squarespace.com/static/58bdb87d9de4bbb44fc07c42/t/58bde81037c581850ec8e182/1488893776529/person2.jpg" },
      { name: "Tom", login: "jbwkje2332", avatarUrl: "https://cdn.cjr.org/wp-content/uploads/2016/12/Tump_Nixon_Circle-500x500.png" },
      { name: "Rodrigo", login: "2323jbjber", avatarUrl: "https://buffer-uploads.s3.amazonaws.com/52f3ace2069bd7a639000078/9720993675319bd6756ca1036fc5952d.jpg" },
    ]
  }

  onFollow = () => {
    alert("You've followed ")
  }

  render() {
    const { suggestions } = this.state;

    return(
      <div className="suggestions">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h2 className="block-title">Who to follow</h2>
          <a href="#" className="link">Refresh</a>
          <a href="#" className="link">View all</a>
        </div>
        {suggestions.map((suggestion, index) =>
          <div>
            <Suggestion
              name={suggestion.name}
              login={suggestion.login}
              avatarUrl={suggestion.avatarUrl}
            />
            {index !== suggestions.length-1 ? <Line /> : null}
          </div>
        )}
      </div>
    )
  }
}


export default Suggestions;
