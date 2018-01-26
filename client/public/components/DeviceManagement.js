import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import DeviceUpdateForm from './DeviceUpdateForm';
import ListDevices from './ListDevices';

// import { getDevices } from './userActions';

class DeviceManagement extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('device management mounted');
    // var user = this.props.user;
    // this.props.getDevices(user.email);
  }

  componentWillReceiveProps(nextProps){
    // if(this.props != nextProps){
    //   console.log('new props');
    //   this.props = nextProps;
    //   var user = this.props.user;
    //   this.props.getDevices(user.email);
    // }
  }

  render(){
    var user = this.props.user.data;

    return (
      <div>
        <DeviceUpdateForm />
        <ListDevices/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeviceManagement);
