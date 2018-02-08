import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from '../css/app.css';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import UploadVideo from './UploadVideo';
import DeviceManagement from './DeviceManagement';
import LogoutForm from './LogoutForm';
import AddDevice from './AddDevice';
import DashboardLanding from './DashboardLanding';
import { joinRoom } from '../actions/socketActions';

class DashboardHome extends React.Component {
  constructor(props){
    super(props);

    this.joinRoom = this.joinRoom.bind(this);
  }

  componentDidMount(){
    if(!this.props.user.authorized){
      console.log('User NOT AUTHORIZED, redirect to login page');
      this.props.history.push('/dashboard/login');
    }else{
      // console.log('User is Authorized');
    }

    this.joinRoom();
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      this.props = nextProps;
      if(!this.props.user.authorized){
        // console.log('Unauthorized, redirect to login page');
        this.props.history.push('/dashboard/login');
      }
    }
  }

  joinRoom(){
    // console.log('joining socket room');
    // console.log('user id: ', this.props.user.data._id);
    const owner_id = this.props.user.data._id;
    const owner_email = this.props.user.data.email;

    var payload = {
      owner_id: owner_id,
      device_id: owner_email
    }

    this.props.joinRoom(payload);
  }

  handleClick_dropDown(event, path, value){
    this.props.history.push('/dashboard/home/' + path);
  }

  render(){
    return (
      <div className={styles.dashboardContainer}>
        <AppBar
          title='Dashboard'
          showMenuIconButton={false}
          iconClassNameRight='muidocs-icon-naviagtion-expand-more'>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            onChange={(e, path, value) => this.handleClick_dropDown(e, path, value)}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}>
            <MenuItem
              primaryText='Upload'
              value='upload' />
            <MenuItem
              primaryText='Add Device'
              value='add-device' />
            <MenuItem
              primaryText='Manage Devices'
              value='manage-devices' />
          </IconMenu>
          Name: {this.props.user.data.name} <br />
          Email: {this.props.user.data.email} <br />
          <LogoutForm />
        </AppBar>
        <div className={styles.dashboardContent}>
          <Route exact path={`${this.props.match.path}/`} component={DashboardLanding} />
          <Route path={`${this.props.match.path}/upload`} component={UploadVideo} />
          <Route path={`${this.props.match.path}/add-device`} component={AddDevice} />
          <Route path={`${this.props.match.path}/manage-devices`} component={DeviceManagement} />
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
    joinRoom: bindActionCreators(joinRoom, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);
