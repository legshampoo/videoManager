import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestUUID } from '../actions/deviceActions';

class RegisterDevice extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('Registering Device with new UUID');
    this.props.requestUUID();
  }

  render(){
    return (
      <div>
        Device has been registered!<br />
        VERY IMPORTANT: <br />
        Please write down the device id, then reboot the device and sign in to your control panel to activate<br />
        <h1>id: {this.props.device.uuid}</h1>
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
    requestUUID: bindActionCreators(requestUUID, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDevice);
