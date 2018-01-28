import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import DeviceUpdateForm from './DeviceUpdateForm';
import ListDevices from './ListDevices';

import DeviceInfo from './DeviceInfo';
import ListMedia from './ListMedia';

class DeviceControls extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      uuid: ''
    }
  }

  componentDidMount(){
    console.log('device control panel mounted');
    if(this.props.match.params.deviceId === undefined){
      return
    }else{
      var uuid = this.props.match.params.deviceId;
      this.setState({
        uuid: uuid
      })
    }
  }

  componentWillReceiveProps(nextProps){
    var deviceChange = false;
    if(this.props != nextProps){
      if(this.props.match.params.deviceId != nextProps.match.params.deviceId){
        deviceChange = true;
      }

      this.props = nextProps;

      if(deviceChange){
        console.log('device changed');
        // this.getDeviceInfo();
        var uuid = this.props.match.params.deviceId;
        this.setState({
          uuid: uuid
        }, () => {
          console.log('new uuid: ', this.state.uuid);
        })
      }
    }
  }

  render(){
    if(this.state.uuid === ''){
      return (
        <div>device controls loading...</div>
      )
    }

    return (
      <div>
        <DeviceInfo uuid={this.state.uuid}/>
        <ListMedia deviceId={this.state.uuid}/>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceControls);
