import React, { Component } from 'react';

import styles from '../css/app.css';
import Video from '../vid/cell.mp4';

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
    // const src = "https://www.youtube.com/embed/XGSy3_Czz8k";

    return (
      <div styles={styles.container}>
        <video
          autoPlay
          loop
          className={styles.videoPlayer}>
          <source src={Video} type='video/mp4' />
          Browser does not support video element.
        </video>
        {/* <div className='controls'>
          <button onClick={this.play.bind(this)} className='play_pause_btn'>
            <svg
              className={this.state.paused ? 'svg_play_pause' : 'hide'}
              viewBox='0 0 232.153 232.153'>
                <path d='M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266
    c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267
    l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z' />
              </svg>
              <svg
              className={this.state.paused ? 'hide' : 'svg_play_pause'}
              viewBox='0 0 232.153 232.153'
            >
              <path d='M80.543,0H35.797c-9.885,0-17.898,8.014-17.898,17.898v196.883
		c0,9.885,8.013,17.898,17.898,17.898h44.746c9.885,0,17.898-8.013,17.898-17.898V17.898C98.44,8.014,90.427,0,80.543,0z M196.882,0
		h-44.746c-9.886,0-17.899,8.014-17.899,17.898v196.883c0,9.885,8.013,17.898,17.899,17.898h44.746
		c9.885,0,17.898-8.013,17.898-17.898V17.898C214.781,8.014,206.767,0,196.882,0z' />
            </svg>
          </button>
        </div> */}
      </div>)
  }
}
