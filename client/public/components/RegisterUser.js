import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import RegisterUserForm from './RegisterUserForm';

class RegisterUser extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      console.log('new props');
      this.props = nextProps;
      // console.log()
      if(this.props.user.authorized){
        console.log('yees authed');
        this.props.history.push('/dashboard/home');
        // this.props.history.push('/device/register/new-uuid');
      }
    }
  }

  render(){
    return (
      <div>
        Register User
        <RegisterUserForm />
      </div>)
  }
}

// export default RegisterUser;

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // userRegister: bindActionCreators(userRegister, dispatch)
  }
}

// export default LoginForm;
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
