import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from '../css/app.css';

import FlatButton from 'material-ui/FlatButton';
import DeviceUpdateForm from './DeviceUpdateForm';
import ListDevices from './ListDevices';

import { getUserMedia, updateDevice } from '../actions/userActions';

class ListMedia extends React.Component {
  constructor(props){
    super(props);
    this.getUserMedia = this.getUserMedia.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    console.log('list media mounted')
    if(this.props.user.data._id === undefined){
      return
    }
    this.getUserMedia();
  }

  getUserMedia(){
    console.log('get user media');
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
    console.log('location', location);
    console.log('update device: ', this.props.deviceId);

    var payload = {
      uuid: this.props.deviceId,
      currentMedia: location
    }

    this.props.updateDevice(payload);
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
      // console.log(m);
      var location = m.location;
      let item = (
        <FlatButton
          key={index}
          style={{height: 100, width: 300}}
          onClick={() => this.handleClick(location)}>
          <div>
            Title: {m.title}<br />
            Description: {m.description}<br />
          </div>
        </FlatButton>
      )

      content.push(item);
    })

    return(
      <div>{content}</div>
    )
  }

  render(){
    return (
      <div>
        <h3>List Media </h3>
        {this.renderMedia()}
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
    getUserMedia: bindActionCreators(getUserMedia, dispatch),
    updateDevice: bindActionCreators(updateDevice, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMedia);