import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

// import RegisterUserForm from './RegisterUserForm';
import UploadVideoForm from './UploadVideoForm';

class UploadVideo extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('uploadVideo mounted');
  }

  componentWillReceiveProps(nextProps){
    // if(this.props != nextProps){
    //   console.log('new props');
    //   this.props = nextProps;
    //
    //   if(this.props.user.authorized){
    //     console.log('yees authed');
    //     this.props.history.push('/dashboard/home');
    //   }
    // }
  }

  render(){
    return (
      <div>
        <UploadVideoForm />
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadVideo);
