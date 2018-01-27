import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';
// import { NavLink } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';


// import DeviceUpdateForm from './DeviceUpdateForm';
import { getDevices } from '../actions/userActions';

class ListDevices extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // console.log('list devices mounted');
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
    this.props.history.push(path);
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
        <FlatButton
          key={key}
          onClick={() => this.handleClick(id)} >
            {name}
          </FlatButton>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListDevices));
