import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DeviceUpdateForm from './DeviceUpdateForm';
import ListDevices from './ListDevices';

import { getUserMedia, updateDevice, deleteContent } from '../actions/userActions';

class ListMedia extends React.Component {
  constructor(props){
    super(props);
    this.getUserMedia = this.getUserMedia.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){
    if(this.props.user.data._id === undefined){
      return
    }
    this.getUserMedia();
  }

  getUserMedia(){
    var userId = this.props.user.data._id;
    var payload = {
      userId: userId
    }

    this.props.getUserMedia(payload);
  }

  componentWillReceiveProps(nextProps){
    var idChanged = false;
    if(this.props != nextProps){
      if(this.props.user.data._id != nextProps.user.data._id){
        idChanged = true;
      }

      this.props = nextProps;

      if(idChanged){
        this.getUserMedia();
      }
    }
  }

  handleClick(location){
    var payload = {
      uuid: this.props.deviceId,
      currentMedia: location
    }

    this.props.updateDevice(payload);
  }

  handleClick_deleteContent(location){
    console.log('delete content: ', location);

    var payload = {
      location: location
    }

    this.props.deleteContent(payload);
  }

  renderMedia(){
    if(this.props.user.media === undefined){
      return(
        <div>loading...</div>
      )
    }else if(this.props.user.media.length === 0){
      return(
        <div>No Media</div>
      )
    }

    var media = this.props.user.media;
    let content = [];
    media.forEach((m, index) => {
      var location = m.location;
      var buttonColor = '#D4D4D4';
      if(this.props.user.currentDevice === undefined){
        //do nothing
      }else{
        if(this.props.user.currentDevice.currentMedia === m.location){
          buttonColor = '#7CA8FF'
        }
      }

      let item = (
        <div
          key={index}
          style={buttonStyles}>
          <RaisedButton
            key={index}
            style={{height: 100, width: 300}}
            label={m.title}
            backgroundColor={buttonColor}
            onClick={() => this.handleClick(location)}>
          </RaisedButton>
          {/* <RaisedButton
            key={index + '_delete'}
            label='Delete Content'
            onClick={() => this.handleClick_deleteContent(location)}
            >

          </RaisedButton> */}
        </div>
      )

      content.push(item);
    })

    return(
      <div>{content}</div>
    )
  }

  render(){
    // console.log(this.props.user.currentDevice);
    return (
      <div>
        <h3>List Media </h3>
        {this.renderMedia()}
      </div>)
  }
}

const buttonStyles = {
  marginTop: 10
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    // currentDevice: state.currentDevice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserMedia: bindActionCreators(getUserMedia, dispatch),
    updateDevice: bindActionCreators(updateDevice, dispatch),
    deleteContent: bindActionCreators(deleteContent, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMedia);
