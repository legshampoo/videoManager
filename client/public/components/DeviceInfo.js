import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../css/app.css';

import DeviceUpdateForm from './DeviceUpdateForm';
import ListDevices from './ListDevices';

import { getDeviceInfo, getUserMedia } from '../actions/userActions';

class DeviceInfo extends React.Component {
  constructor(props){
    super(props);

    this.renderCurrentDeviceData = this.renderCurrentDeviceData.bind(this);
  }

  componentDidMount(){
    // console.log('device info mounted');
    if(this.props.uuid === undefined){
      return
    }

    this.getDeviceInfo();
  }

  getDeviceInfo(){
    var uuid = this.props.uuid;
    var userId = this.props.user.data._id;
    var payload = {
      uuid: uuid,
      userId: userId
    }

    // console.log('payload before sending', payload);
    this.props.getDeviceInfo(payload);
  }

  componentWillReceiveProps(nextProps){
    var uuidChange = false;
    if(this.props != nextProps){
      // console.log('device info new props');
      if(this.props.uuid != nextProps.uuid){
        uuidChange = true
      }
      this.props = nextProps;

      if(uuidChange){
        this.getDeviceInfo();
      }
    }
  }

  renderCurrentDeviceData(){

    if(this.props.user.currentDevice === undefined){
      return (
        <div>current device undefined, loading...</div>
      )
    }

    var device = this.props.user.currentDevice;
    var content = [];
    Object.keys(device).forEach(key => {
      var item = (
        <div key={key}>
          {key}: {device[key]}
        </div>
      )
      content.push(item);
    })

    return (
      <div>
        {content}
      </div>
    )
  }

  render(){
    if(this.props.user.currentDevice === undefined){
      return(
        <div>device info loading...</div>
      )
    }

    var device = this.props.user.currentDevice;

    return (
      <div>
        <h3>Device Info</h3>
        <h3>Device: {device.deviceName}</h3>
        {this.renderCurrentDeviceData()}
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDeviceInfo: bindActionCreators(getDeviceInfo, dispatch),
    getUserMedia: bindActionCreators(getUserMedia, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfo);
