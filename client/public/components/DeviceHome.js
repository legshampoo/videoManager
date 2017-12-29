import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import VideoPlayer from './VideoPlayer';

class DeviceHome extends Component {
  componentDidMount(){
    console.log('mounted');
  }
  render(){
    return (
      <div>
        device home<br />
        id: {this.props.device.uuid}<br />
        <VideoPlayer />
      </div>)
  }
}

// export default DeviceHome;

const mapStateToProps = (state, ownProps) => {
  return {
    device: state.device
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // updateUUID: bindActionCreators(updateUUID, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceHome);
