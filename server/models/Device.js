const mongoose = require('mongoose');

//set the mongoose promise to be global
mongoose.Promise = global.Promise;  //could use bluebird later

const slug = require('slugs');  //used for url friendly slugs (not sure if needed here)

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,  //removes white space in front and end
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
  slug: String,
  description: {
    type: String,
    trim: true,
    required: 'Please add a brief description'
  },
  tags: [String],
});

deviceSchema.pre('save', function(next){
  //if the name has not been modified, no need to make a new slug
  if(!this.isModified('name')){
    next();  //skip it
    return;
  }
  this.slug = slug(this.name);
  next();
  //todo make more resilient so slugs are unique
})

module.exports = mongoose.model('Device', deviceSchema);
