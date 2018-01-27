import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import styles from '../css/app.css';
import Home from './Home';
import DashboardHome from './DashboardHome';
import Login from './Login';
import RegisterUser from './RegisterUser';

// import UploadVideo from './UploadVideo';

import DeviceLogin from './DeviceLogin';
import DeviceHome from './DeviceHome';
import RegisterDevice from './RegisterDevice';
import NotFound from './NotFound';

class App extends React.Component {
  render(){
    return (
      // <div className={styles.app}>
      <MuiThemeProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard/login' component={Login} />
          <Route exact path='/dashboard/register' component={RegisterUser} />
          <Route path='/dashboard/home' component={DashboardHome} />
          {/* <Route exact path='/dashboard/home/device/:deviceName' component={ManageDevice} /> */}
          {/* <Route exact path='/dashboard/upload' component={UploadVideo} /> */}
          <Route exact path='/device/login' component={DeviceLogin} />
          <Route exact path='/device/:uuid' component={DeviceHome} />
          <Route exact path='/device/register/new-uuid' component={RegisterDevice} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </MuiThemeProvider>)
  }
}

export default App;
