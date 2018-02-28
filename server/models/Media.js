const mongoose = require('mongoose');

//set the mongoose promise to be global
mongoose.Promise = global.Promise;  //could use bluebird later
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const slug = require('slugs');  //used for url friendly slugs (not sure if needed here)

const mediaSchema = new mongoose.Schema({
  type: String,
  owner_id: String,
  owner_email: String,
  created_at: Date,
  title: String,
  description: String,
  location: String,
  tags: [String],
});

mediaSchema.pre('save', function(next){
  next();
});

mediaSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Media', mediaSchema, 'medias');
