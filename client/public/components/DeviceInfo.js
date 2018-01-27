import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import DeviceUpdateForm from './DeviceUpdateForm';
import ListDevices from './ListDevices';
// import ListMedia from './ListMedia';

import { getDeviceInfo, getUserMedia } from '../actions/userActions';

class DeviceInfo extends React.Component {
  constructor(props){
    super(props);

    this.renderCurrentDeviceData = this.renderCurrentDeviceData.bind(this);

    this.state = {
      uuid: ''
    }
  }

  componentDidMount(){
    console.log('device control panel mounted');
    // var uuid = this.props.match.params.deviceId;
    var uuid = this.props.uuid;
    var userId = this.props.user.data._id;
    var payload = {
      uuid: uuid,
      userId: userId
    }
    this.props.getDeviceInfo(payload);
  }

  componentWillReceiveProps(nextProps){
    // var deviceChange = false;
    // if(this.props != nextProps){
    //   console.log('new props');
    //   console.log('params id: ', this.props.match.params.deviceId);
    //
    //   if(this.props.match.params.deviceId != nextProps.match.params.deviceId){
    //     deviceChange = true;
    //   }
    //
    //   this.props = nextProps;
    //
    //   if(deviceChange){
    //     var uuid = this.props.match.params.deviceId;
    //     var userId = this.props.user.data._id;
    //     var payload = {
    //       uuid: uuid,
    //       userId: userId
    //     }
    //     this.props.getDeviceInfo(payload);
    //   }
    // }
  }

  renderCurrentDeviceData(){

    if(this.props.user.currentDevice === undefined){
      return (
        <div>loading...</div>
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
        <div>loading...</div>
      )
    }

    var device = this.props.user.currentDevice;

    return (
      <div>
        <h3>Device Info</h3>
        <h3>Device: {device.deviceName}</h3>
        {this.renderCurrentDeviceData()}
        {/* <ListMedia /> */}
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
