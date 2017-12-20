import React from 'react';
import VideoPlayer from './VideoPlayer';
import styles from '../css/app.css';

export default class App extends React.Component {
  render(){
    return (
      <div className={styles.app}>
        <VideoPlayer />
      </div>)
  }
}
