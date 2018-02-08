import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../css/app.css';

import RaisedButton from 'material-ui/RaisedButton';

import DeviceUpdateForm from './DeviceUpdateForm';
import ListDevices from './ListDevices';

import DeviceInfo from './DeviceInfo';
import ListMedia from './ListMedia';

import { sendDeviceRefresh } from '../actions/socketActions';

class DeviceControls extends React.Component {
  constructor(props){
    super(props);

    this.sendDeviceRefresh = this.sendDeviceRefresh.bind(this);

    this.state = {
      uuid: '',
      heartbeatStatus: 'waiting'
    }
  }

  componentDidMount(){
    if(this.props.match.params.deviceId === undefined){
      return
    }else{
      var uuid = this.props.match.params.deviceId;
      this.setState({
        uuid: uuid
      }, () => {
        // console.log('set state in didmount');
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
        var uuid = this.props.match.params.deviceId;
        this.setState({
          uuid: uuid
        }, () => {
          // console.log('new uuid: ', this.state.uuid);
        })
      }

      if(this.props.sockets.heartbeats === undefined){
        console.log('fine');
      }else{
        // console.log(this.state.uuid);
        const status = this.props.sockets.heartbeats[this.state.uuid];
        // console.log(status);
        if(status === 'alive'){
          // console.log('alive');
          this.setState({
            heartbeatStatus: 'alive'
          })
        }else{
          this.setState({
            heartbeatStatus: 'dead'
          })
        }
      }
    }
  }

  renderHeartbeatStatus(){
    if(this.state.heartbeatStatus === 'alive'){
      return (
        <div style={alive}>
          <h3>Online</h3>
        </div>
      )
    }else if(this.state.heartbeatStatus === 'dead'){
      return (
        <div style={dead}>
          <h3>Offline</h3>
        </div>
      )
    }else {
      return (
        <div style={waiting}>
          <h3>Waiting for Status</h3>
        </div>
      )
    }


  }

  sendDeviceRefresh(){
    var payload = {
      device_id: this.state.uuid
    }

    this.props.sendDeviceRefresh(payload);
  }

  render(){
    if(this.state.uuid === ''){
      return (
        <div>device controls loading...</div>
      )
    }

    return (
      <div className={styles.deviceControls}>
        <DeviceInfo uuid={this.state.uuid}/>
        <ListMedia deviceId={this.state.uuid}/>
        <div className={styles.containerCentered}>
          {this.renderHeartbeatStatus()}
          <RaisedButton
            onClick={this.sendDeviceRefresh}
            label='Refresh Device'
            style={{width: 200, height: 50}}/>
        </div>
      </div>)
  }
}

const alive = {
  backgroundColor: 'green',
  width: 150,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid white',
  marginBottom: 10,
  borderRadius: 10
}

const dead = {
  backgroundColor: 'red',
  width: 150,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid white',
  marginBottom: 10,
  borderRadius: 10
}

const waiting = {
  backgroundColor: 'yellow',
  width: 150,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid white',
  marginBottom: 10,
  borderRadius: 10
}


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    sockets: state.sockets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendDeviceRefresh: bindActionCreators(sendDeviceRefresh, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceControls);
