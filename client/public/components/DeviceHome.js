import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import VideoPlayer from './VideoPlayer';

import { getDeviceInfo } from '../actions/deviceActions';

class DeviceHome extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log('mounted');
    if(this.props.device.uuid === undefined){
      console.log('uuid is undefined');
      return
    }
    console.log('id check: ', this.props.device.uuid);
    var payload = {
      uuid: this.props.device.uuid
    }

    this.props.getDeviceInfo(payload);

  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      this.props = nextProps;
      console.log('got props device home');
    }
  }

  render(){
    return (
      <div>
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
    getDeviceInfo: bindActionCreators(getDeviceInfo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceHome);
