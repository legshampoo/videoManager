import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

var rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if(module.hot){
  module.hot.accept(App, function (){
    var NextApp = App;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
