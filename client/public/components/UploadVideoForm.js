import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../css/app.css';

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
      title: '',
      description: ''
    }
  }

  componentDidMount(){
    // console.log('uploadVideo mounted');
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps){
      // console.log('new props');
      this.props = nextProps;

      // console.log('user id: ', this.props.user.data._id);
    }
  }

  handleFormChange(e){
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value
    }, function(){
      // console.log(this.state);
    });
  }

  handleFileChange(filesArray){
    this.setState({
      file: filesArray[0]
    }, function(){
      // console.log('file set: ', this.state.file);
    });
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log('submit');
    // console.log(this.state);
    var form = new FormData();

    form.append('title', this.state.title);
    form.append('description', this.state.description);
    form.append('userId', this.props.user.data._id);
    form.append('userEmail', this.props.user.data.email);
    form.append('file', this.state.file);
    var payload = form;

    this.props.uploadVideo(payload);
  }

  render(){
    return (
      <div className={styles.genericContainer}>
        <form
          className={styles.formContainer}
          encType='multipart/form-data'>
          <div style={{'padding': 20}}>
            <h2>Upload Video</h2>
          </div>
          <input
            type='file'
            name='file'
            onChange={ (e) => this.handleFileChange(e.target.files) } />
          <TextField
            name='title'
            floatingLabelText='Title'
            value={this.state.title}
            onChange={this.handleFormChange}
            style={{'width': 400}} />
          <TextField
            name='description'
            floatingLabelText='Description'
            value={this.state.description}
            onChange={this.handleFormChange}
            style={{'width': 400}} />
          <RaisedButton
            label='Upload'
            onClick={(e) => this.handleSubmit(e)}
            style={{'margin': 20}}/>
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
