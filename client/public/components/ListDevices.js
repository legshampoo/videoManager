import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

// import DeviceUpdateForm from './DeviceUpdateForm';
import { getDevices } from '../actions/userActions';

class ListDevices extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('list devices mounted');
    var user = this.props.user.data;
    console.log(user._id);
    var payload = {
      email: user.email,
      id: user._id,

    }
    this.props.getDevices(payload);
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      console.log('new props');
      this.props = nextProps;
    }
  }

  renderDeviceData(){
    if(this.props.user.devices === undefined){
      return (
        <div>loading...</div>
      )
    }else if(this.props.user.devices.length === 0){
      return (
        <div>no devices found</div>
      )
    }

    var devices = this.props.user.devices;
    console.log(devices);

    var content = [];
    devices.forEach(device => {
      console.log(device.deviceName);
      var d = (
        <div key={device.deviceName}>
          {device.deviceName}
        </div>
      )

      content.push(d);
    })

    return(
      <div>
        {content}
      </div>
    )
  }

  render(){
    return (
      <div>
        List Devices <br />
        {this.renderDeviceData()}
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
    getDevices: bindActionCreators(getDevices, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDevices);
