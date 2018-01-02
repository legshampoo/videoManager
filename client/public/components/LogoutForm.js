import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import { userLogout } from '../actions/userActions';


class LogoutForm extends React.Component {
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      // email: '',
      // password: '',
    }
  }

  // handleChange(e){
  //   const key = e.target.name;
  //   const value = e.target.value;
  //
  //   this.setState({
  //     [key]: value
  //   });
  // }

  // handleSubmit(e){
  //   e.preventDefault();
  //
  //   var payload = {
  //     email: this.state.email,
  //     password: this.state.password
  //   }
  //
  //   this.props.userLogin(payload);
  // }

  handleLogout(){
    console.log('log out');
    this.props.userLogout();
  }

  render(){
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // device: state.device
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

// export default LoginForm;
export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);
