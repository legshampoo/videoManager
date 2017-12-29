import React, { Component } from 'react';

import styles from '../css/app.css';
// import Video from '../vid/cells4.mp4';
import Video from '../vid/motion_template.mp4';

export default class VideoPlayer extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log('videoplayer mounted');
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
