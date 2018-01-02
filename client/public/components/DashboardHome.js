import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import LogoutForm from './LogoutForm';

class DashboardHome extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(!this.props.user.authorized){
      console.log('User NOT AUTHORIZED');
      this.props.history.push('/dashboard/login');
    }else{
      console.log('User is authorized yay');
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      console.log('new props');
      this.props = nextProps;
      // console.log()
      if(!this.props.user.authorized){
        console.log('not authorized');
        this.props.history.push('/');
        // this.props.history.push('/device/register/new-uuid');
      }
    }
  }
  render(){
    return (
      <div>
        Dashboard Home <br />
        <LogoutForm />
        {/* user: {this.props.user.email}         */}
      </div>)
  }
}

// export default DashboardHome;

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
export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);
