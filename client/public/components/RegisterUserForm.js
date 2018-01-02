import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import { userRegister } from '../actions/userActions';

class RegisterUserForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    }

    this.props.userRegister(payload);
  }

  render(){
    return (
      <div>
        Sign Up Form
        <form onSubmit={this.handleSubmit}>
          <h1>Register!</h1>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange} />
            <br />
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
          Confirm Password:
          <input
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange} />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userRegister: bindActionCreators(userRegister, dispatch)
  }
}

// export default LoginForm;
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserForm);
