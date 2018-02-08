import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

import styles from '../css/app.css';

import { getDevices } from '../actions/userActions';

class ListDevices extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      selected: ''
    }
  }

  componentDidMount(){
    var user = this.props.user.data;
    var payload = {
      email: user.email,
      id: user._id,

    }
    this.props.getDevices(payload);
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      this.props = nextProps;
    }
  }

  handleClick(deviceId){
    var path = this.props.match.path + '/' + deviceId;

    this.setState({
      selected: deviceId
    }, () => {
      // console.log('selected: ', this.state.selected);
      this.props.history.push(path);
    })
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
    let content = [];
    Object.keys(devices).forEach(key => {
      var id = devices[key].uuid;
      var name = devices[key].deviceName;

      let item = (
        <RaisedButton
          key={key}
          onClick={() => this.handleClick(id)}
          backgroundColor={ this.state.selected != id ? '#D4D4D4' : '#7CA8FF'}
          style={buttonStyles}>
            {name}
          </RaisedButton>
      )
      content.push(item);
    })

    return(
      <div>
        {content}
      </div>
    )
  }

  render(){
    return (
      <div className={styles.deviceList}>
        <h3>Devices</h3>
        {this.renderDeviceData()}
      </div>)
  }
}

const buttonStyles = {
  width: 150,
  marginTop: 10,
  marginLeft: 10
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListDevices));
