import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import styles from '../css/app.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
        <form onSubmit={this.handleSubmit}>
          <h1>Register!</h1>
          <TextField
            name='name'
            floatingLabelText='Name'
            value={this.state.name}
            onChange={this.handleChange} />
            <br />
          <TextField
            name='email'
            floatingLabelText='Email'
            value={this.state.email}
            onChange={this.handleChange} />
            <br />
          <TextField
            name='password'
            floatingLabelText='Password'
            value={this.state.password}
            onChange={this.handleChange} />
            <br />
          <TextField
            name='passwordConfirm'
            floatingLabelText='PasswordConfirm'
            value={this.state.passwordConfirm}
            onChange={this.handleChange} />
            <br />
          <RaisedButton
            label='Register'
            type='submit' />
        </form>
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    userRegister: bindActionCreators(userRegister, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserForm);
