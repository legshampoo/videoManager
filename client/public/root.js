import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App';

class AppRouter extends Component {
  render(){
    return(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
  }
}

export default AppRouter;
