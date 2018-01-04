import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { uploadVideo } from '../actions/userActions';

class UploadVideoForm extends React.Component {
  constructor(props){
    super(props);

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    // this.fileUpload = this.fileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      file: null,
      fileName: ''
    }
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

  handleFormChange(e){
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value
    }, function(){
      console.log(this.state);
    });
  }

  handleFileChange(filesArray){
    // e.preventDefault();
    // console.log(e);
    // console.log(filesArray);
    // let filesArray = e.target.files;

    this.setState({
      file: filesArray[0]
    }, function(){
      console.log('file set: ', this.state.file);
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('submit');
    console.log(this.state);
    // const FormData = new FormData();
    var form = new FormData();

    form.append('file', this.state.file);
    form.append('fileName', this.state.fileName);

    var payload = form;

    this.props.uploadVideo(payload);
  }

  render(){
    return (
      <div>
        UploadVideoForm
        <form
          encType='multipart/form-data'>
          {/* <RaisedButton
            containerElement='label'
            label='Choose File'
            onClick={ (e) => this.handleChange(e)}>
            <input
              type='file'
              style={{display: 'none'}}/>
          </RaisedButton> */}
          <TextField
            name='fileName'
            floatingLabelText='File Name'
            value={this.state.fileName}
            onChange={this.handleFormChange} />
          <input type='file'
              name='file'
              onChange={ (e) => this.handleFileChange(e.target.files) } />
          <RaisedButton
            label='Upload'
            onClick={(e) => this.handleSubmit(e)} />
        </form>
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
    uploadVideo: bindActionCreators(uploadVideo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadVideoForm);
