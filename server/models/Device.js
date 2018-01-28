const mongoose = require('mongoose');

//set the mongoose promise to be global
mongoose.Promise = global.Promise;  //could use bluebird later
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const slug = require('slugs');  //used for url friendly slugs (not sure if needed here)

const deviceSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    trim: true,  
    required: 'Please enter a device name'
  },
  uuid: {
    type: String,
    trim: true,
    required: 'Please enter the device ID'
  },
  owner: {
    type: String,
    trim: true,
    required: 'Please enter an owner'
  },
  ownerId: {
    type: String
  },
  ownerName: {
    type: String
  },
  description: {
    type: String,
    trim: true,
    required: false
  },
  tags: [String],
  currentMedia: String
});

deviceSchema.pre('save', function(next){
  //if the name has not been modified, no need to make a new slug
  // if(!this.isModified('name')){
  //   next();  //skip it
  //   return;
  // }
  // this.slug = slug(this.name);
  next();
  //todo make more resilient so slugs are unique
});

deviceSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Device', deviceSchema);
