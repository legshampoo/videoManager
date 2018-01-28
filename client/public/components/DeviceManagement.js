import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';
// import styles from '../css/app.css';

import ListDevices from './ListDevices';
import DeviceControls from './DeviceControls';
import ListMedia from './ListMedia';

class DeviceManagement extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      this.props = nextProps;
    }
  }

  render(){
    var user = this.props.user.data;
    return (
      <div>
        <ListDevices/>
        <div>
          <Route path={`${this.props.match.path}/:deviceId`} component={DeviceControls} />
        </div>
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
