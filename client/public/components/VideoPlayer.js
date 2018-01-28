import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from '../css/app.css';
// import Video from '../vid/cells4.mp4';
// import Video from '../vid/motion_template.mp4';

class VideoPlayer extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log('videoplayer mounted');

  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      this.props = nextProps;
      console.log('got props device home');
    }
  }

  render(){
    if(this.props.device.data === undefined){
      return (
        <div>loading...</div>
      )
    }

    var location = this.props.device.data.currentMedia;
    console.log(this.props.device.data)
    var location = 'http://' + this.props.device.data.currentMedia;
    console.log(location);

    return (
      <div styles={styles.container}>
        <video
          autoPlay
          loop
          className={styles.videoPlayer}>
          <source src={location} type='video/mp4' />
          Browser does not support video element.
        </video>
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    device: state.device
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getDeviceInfo: bindActionCreators(getDeviceInfo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
