import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

// import styles from '../css/app.css';
import Home from './Home';
import DashboardHome from './DashboardHome';
import Login from './Login';
import RegisterUser from './RegisterUser';
import DeviceLogin from './DeviceLogin';
import DeviceHome from './DeviceHome';
import RegisterDevice from './RegisterDevice';
import NotFound from './NotFound';

class App extends React.Component {
  render(){
    return (
      // <div className={styles.app}>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard/login' component={Login} />
          <Route exact path='/dashboard/register' component={RegisterUser} />
          <Route exact path='/dashboard/home' component={DashboardHome} />
          <Route exact path='/device/login' component={DeviceLogin} />
          <Route exact path='/device/:uuid' component={DeviceHome} />
          <Route exact path='/device/register/new-uuid' component={RegisterDevice} />
          <Route component={NotFound} />
        </Switch>
      </div>)
  }
}

export default App;
