import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

// import styles from '../css/app.css';
import Home from './Home';
import Login from './Login';
import DeviceLogin from './DeviceLogin';
import RegisterDevice from './RegisterDevice';
import NotFound from './NotFound';

class App extends React.Component {
  render(){
    return (
      // <div className={styles.app}>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/device-login' component={DeviceLogin} />
          <Route exact path='/device-register' component={RegisterDevice} />
          <Route component={NotFound} />
        </Switch>
      </div>)
  }
}

export default App;
