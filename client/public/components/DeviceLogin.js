import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateUUID } from '../actions/deviceActions';

class DeviceLogin extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    //check the devices localStorage for a UUID
    this.checkUUID();
  }

  componentDidUpdate(){
    //listen for state change, when the UUID is found, redirect to device home page
    this.redirect();
  }

  checkUUID(){
    console.log('Checking device for UUID');

    var uuid = localStorage.getItem('uuid');

    if(uuid == null || uuid == undefined || uuid == ''){
      //if the UUID is not found
      console.log('No UUID found, redirecting to register device page');
      //push to the new-uuid page
      this.props.history.push('/device/new-uuid');
    }else{
      //take uuid saved in localStorage and store it to redux state
      this.props.updateUUID(uuid);
    }
  }

  //after the UUID is saved in store, redirect to the device home page
  redirect(){
    const uuid = this.props.device.uuid;
    if(uuid == null || uuid == 'null' || uuid == undefined || uuid == 'undefined' || uuid == ''){
      //if it's still undefined or null
      return
    }

    var deviceHome = '/device/' + uuid;
    this.props.history.push(deviceHome);
  }

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
    updateUUID: bindActionCreators(updateUUID, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceLogin);
