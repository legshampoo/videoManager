import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { checkUUIDExists } from '../actions/deviceActions';

class DeviceLogin extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log('device login mount, check uuid')

    this.checkUUID();
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      console.log('device login got props');
      this.props = nextProps;

      if(this.props.device.deviceCheck){
        if(this.props.device.deviceFound){
          // console.log('device found');
          var uuid = this.props.device.uuid;
          // console.log('the uuid is this yall: ', uuid);
          var deviceHome = '/device/' + uuid;
          this.props.history.push(deviceHome);
        }else{
          console.log('device not found');
          this.props.history.push('/device/register/new-uuid');
        }
      }else{
        console.log('not checked yet');
      }

    }
  }

  checkUUID(){
    var uuid = localStorage.getItem('uuid');
    console.log('UUID: ', uuid);
    if(uuid === null || uuid === undefined || uuid === ''){
      //if the UUID is not found
      console.log('No UUID found on device, redirecting to register device page');
      //push to the new-uuid page
      this.props.history.push('/device/register/new-uuid');
    }else{
      //take uuid saved in localStorage and store it to redux state
      console.log('UUID FOUND, checking database for match');
      var payload = {
        uuid: uuid
      }

      this.props.checkUUIDExists(payload);
      // this.props.updateUUID(uuid);  //saves to localstorage if it doesnt exist
    }
  }

  //after the UUID is saved in store, redirect to the device home page
  // redirect(){
  //   const uuid = this.props.device.uuid;
  //   if(uuid == null || uuid == 'null' || uuid == undefined || uuid == 'undefined' || uuid == ''){
  //     //if it's still undefined or null
  //     return
  //   }
  //
  //   var deviceHome = '/device/' + uuid;
  //   this.props.history.push(deviceHome);
  // }

  render(){
    return (
      <div>
        Device Logging in...<br />
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
    // updateUUID: bindActionCreators(updateUUID, dispatch),
    checkUUIDExists: bindActionCreators(checkUUIDExists, dispatch),
    // emitHeartbeat: bindActionCreators(emitHeartbeat, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceLogin);
