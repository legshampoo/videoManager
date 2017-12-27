import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import App from './components/App';
import Home from './components/Home';
import RegisterDevice from './components/RegisterDevice';
import Login from './components/Login';
import NotFound from './components/NotFound';

class AppRouter extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register-device' component={RegisterDevice} />
          <Route exact path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
