import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import '../styles/TweetBox.css';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GgikuRC35NeM7AslgWBGDdARkcs1dzhDah7qqnVWw=s96-c' />
          <input type='text' placeholder="What's happening?" />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional: Enter image URL'
        />

        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
