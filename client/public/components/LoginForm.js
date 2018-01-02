import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import { userLogin } from '../actions/userActions';

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange(e){
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    var payload = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.userLogin(payload);
  }

  render(){
    return (
      <div>
        Login Form
        <form onSubmit={this.handleSubmit}>
          <h1>Sign In</h1>
          Email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />
            <br />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange} />
          <br />
          <input type='submit' value='Submit' />
        </form>

        <NavLink to='/dashboard/register'>Sign Up!</NavLink>
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
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

// export default LoginForm;
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
