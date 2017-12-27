import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from './components/App';

class AppRouter extends Component {
  render(){
    return(
      <Router>
        <App />
      </Router>
    )
  }
}

export default AppRouter;
