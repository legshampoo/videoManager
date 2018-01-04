import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import styles from '../css/app.css';
import RaisedButton from 'material-ui/RaisedButton';

import { userLogout } from '../actions/userActions';

class LogoutForm extends React.Component {
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
  
    }
  }

  handleLogout(){
    console.log('log out');
    this.props.userLogout();
  }

  render(){
    return (
      <div>
        <RaisedButton
          label='Log Out'
          onClick={this.handleLogout} />
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);
