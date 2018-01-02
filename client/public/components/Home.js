import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from '../css/app.css';


class Home extends React.Component {
  render(){
    return (
      <div>
        Home <br />
        <NavLink to='/dashboard/login'>
          Log In
        </NavLink>
        <br />
        <NavLink to='/dashboard/register'>
          Create an Account
        </NavLink>
      </div>)
  }
}

export default Home;
