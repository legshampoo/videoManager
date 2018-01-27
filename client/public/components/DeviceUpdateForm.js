import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { addDevice } from '../actions/userActions';

class DeviceUpdateForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      deviceName: '',
      uuid: ''
    }
  }

  componentDidMount(){
    // console.log('Device update form mounted');
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
  }

  handleChange(e){
    console.log('change');
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value
    }, function(){
      console.log(this.state);
    });
  }

  handleSubmit(e){
    console.log('submit');

    var payload = {
      owner: this.props.user.data.email,
      ownerId: this.props.user.data._id.toString(),
      ownerName: this.props.user.data.name,
      deviceName: this.state.deviceName,
      uuid: this.state.uuid
    }

    this.props.addDevice(payload);
  }

  render(){
    return (
      <div>
        Device Update Form
        <form>
          <TextField
            name='deviceName'
            floatingLabelText='Device Name'
            value={this.state.deviceName}
            onChange={this.handleChange} />
          <br />
          <TextField
            name='uuid'
            floatingLabelText='Device ID'
            value={this.state.uuid}
            onChange={this.handleChange} />
          <br />
          <RaisedButton
            label='Submit'
            // type='submit'
            onClick={this.handleSubmit}/>
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
    addDevice: bindActionCreators(addDevice, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceUpdateForm);
