import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/app.css';


class Home extends React.Component {
  render(){
    return (
      <div className={styles.loginContainer}>
        <div>
          <h2>Video Manager</h2>
        </div>
        <div>
          <NavLink to='/dashboard/login'>
            Log In
          </NavLink>
        </div>
        <div>
          <NavLink to='/dashboard/register'>
            Create an Account
          </NavLink>
        </div>
      </div>)
  }
}

export default Home;
