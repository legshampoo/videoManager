import React, { Component } from 'react';

import styles from '../css/app.css';
import Video from '../vid/cells4.mp4';

export default class VideoPlayer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      paused: true
    };
  }

  play(){
    console.log('play');
  }

  render(){
    return (
      <div styles={styles.container}>
        <video
          autoPlay
          loop
          className={styles.videoPlayer}>
          <source src={Video} type='video/mp4' />
          Browser does not support video element.
        </video>
      </div>)
  }
}
