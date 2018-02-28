import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from '../css/app.css';
import { emitHeartbeat, joinRoom } from '../actions/socketActions';

class VideoPlayer extends React.Component {
  constructor(props){
    super(props);

    this.joinRoom = this.joinRoom.bind(this);

    this.readToJoinRoom = false;
    this.readyToInitHeartbeat = false;

  }

  componentDidMount(){
    console.log('videoplayer mounted');
    var payload = {
      message: 'trying to connect'
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      this.props = nextProps;
      console.log('got props device home');

      if(this.props.device.data.ownerId !== undefined && this.props.device.data.uuid !== undefined){
        if(!this.readyToJoinRoom && !this.readyToInitHeartbeat){
          this.joinRoom();
          this.initHeartbeat();
          this.readyToInitHeartbeat = true;
          this.readyToJoinRoom = true;
        }
      }


    }
  }

  joinRoom(){
    console.log('join room here');
    const owner_id = this.props.device.data.ownerId;
    const device_id = this.props.device.data.uuid;
    var payload = {
      owner_id: owner_id,
      device_id: device_id
    }

    this.props.joinRoom(payload);
  }

  initHeartbeat(){

    setInterval(() => {
      if(this.props.device.data.uuid === undefined){
        return
      }
      var payload = {
        owner_id: this.props.device.data.ownerId,
        device_id: this.props.device.data.uuid,
        time: Date.now(),
        status: 'alive'
      }
      this.props.emitHeartbeat(payload);
    }, 5000);
  }

  render(){
    if(this.props.device.data === undefined){
      return (
        <div>Video Player device data not found...</div>
      )
    }

    if(this.props.device.data.currentMedia === undefined){
      return (
        <div className={styles.containerCentered}>
          <h1>No media assigned</h1>
          <p>Please use your dashboard to select a video, then restart device.</p>
        </div>
      )
    }

    var location = '';

    if(this.props.device.data.streamContent){
      location = this.props.device.data.currentMedia;
    }else{
      var remotePath = this.props.device.data.currentMedia;
      var strArray = remotePath.split('/');
      var fileName = strArray[strArray.length - 1];
      var path = this.props.device.LOCAL_SERVER_URI + '/video/' + fileName;
      location = path;
    }

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
    emitHeartbeat: bindActionCreators(emitHeartbeat, dispatch),
    joinRoom: bindActionCreators(joinRoom, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
