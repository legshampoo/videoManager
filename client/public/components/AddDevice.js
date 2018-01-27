import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';
// import styles from '../css/app.css';

import DeviceUpdateForm from './DeviceUpdateForm';
// import ListDevices from './ListDevices';
// import DeviceControlPanel from './DeviceControlPanel';
// import ListMedia from './ListMedia';
// import { getDevices } from './userActions';

class AddDevice extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // console.log('device management mounted');
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
        <DeviceUpdateForm />
        {/* <ListDevices/> */}
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

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeviceManagement));
export default connect(mapStateToProps, mapDispatchToProps)(AddDevice);
