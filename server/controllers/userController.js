require('dotenv').config({ path: 'variables.env' });

const mongoose = require('mongoose');

const moment = require('moment');

const passport = require('passport');
const User = mongoose.model('User');
const Device = mongoose.model('Device');

const promisify = require('es6-promisify');

//file upload stuff
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
// const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');
const spacesEndpoint = new aws.Endpoint(process.env.DIGITALOCEAN_STORAGE_ENDPOINT + '/videos');
// const VIDEOS_PATH = '/videos2/';

// const s3 = new aws.S3({
// 	endpoint: process.env.DIGITALOCEAN_STORAGE_ENDPOINT,
// 	accessKeyId: process.env.DIGITALOCEAN_STORAGE_KEY,
// 	secretAccessKey: process.env.DIGITALOCEAN_STORAGE_SECRET
// });
// const s3 = new aws.S3({
// 	endpoint: spacesEndpoint
// });

const s3 = new aws.S3({
	endpoint: spacesEndpoint,
	accessKeyId: process.env.DIGITALOCEAN_STORAGE_KEY,
	secretAccessKey: process.env.DIGITALOCEAN_STORAGE_SECRET
});


exports.attemptedLoginDetection = function(req, res, next){
	console.log('User attempting to login...');
	next();
}

exports.validateRegisterUser = (req, res, next) => {
	console.log('REGISTER USER: validating input');

	req.sanitizeBody('name');
	req.checkBody('name', 'You must supply a name').notEmpty();
	req.checkBody('email', 'That email is  not valid').isEmail();
	req.sanitizeBody('email').normalizeEmail({
		remove_dots: false,
		remove_extension: false,
		gmail_remove_subaddress: false
	});

	req.checkBody('password', 'Password cannot be blank').notEmpty();
	req.checkBody('passwordConfirm', 'Confirmed Password Cannot be blank').notEmpty();
	req.checkBody('passwordConfirm', 'Oops! Your passwords do not match').equals(req.body.password);

	const errors = req.validationErrors();  //does all the checks and puts errors into an object

	if(errors){
		console.log(errors);
		var response = {
			api: {
				error: true,
				message: 'Error validating user data',
				errors: errors
			}
		}

		return res.send(response);
	}

	console.log('REGISTER USER: validation complete');

	next();
}

exports.registerUser = async (req, res, next) => {
  console.log('REGISTER USER:');
	console.log('name: ', req.body.name);
	console.log('email: ', req.body.email);

	const user = new User({
		email: req.body.email,
		name: req.body.name,
		hash: req.body.password
	});

	await user.save()
	.then(res => {
		console.log('Created new user: ', res);
		return next();
	})
	.catch(err => {
		console.log('MongoDB error adding user:');
		console.log(err);

		var response = {
			authorized: false,
			api: {
				error: true,
				message: 'Failed to create new user.  Perhaps email already exists'
			}
		}

		console.log('Server response:');
		console.log(response);

		return res.send(response);
	});
}

exports.login = (req, res) => {
	console.log('LOGIN: logging in...');

	if(!req.user || req.user === undefined){

		var response = {
			authorized: false,
			api: {
				error: false,
				message: 'Login error: No user found, username or password does not match'
			}
		}

		console.log('Server Response: ');
		console.log(response);

		return res.send(response);
	}

	if(req.user){
		var response = {
			authorized: true,
			user: req.user,
			api: {
				error: false,
				message: 'User is authorized, proceed to dashboard homepage'
			}
		}

		console.log('LOGIN: SUCCESS');
		console.log('Server Response: ');
		console.log(response);

		return res.send(response);
	}
}

exports.logout = (req, res) => {
	console.log('USER LOGOUT')
	req.logout();

	var response = {
		authorized: false,
		api: {
			error: false,
			message: 'User has logged out'
		}
	}

	res.send(response);
}


const upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: process.env.DIGITALOCEAN_BUCKET,
		acl: 'public-read',
		key: (request, file, cb) => {
			var fileName = moment().local().format('YYYY-MM-DD HH:mm').toString() + '_' + file.originalname;
			cb(null, fileName);
		}
	})
}).array('file', 1);


exports.uploadVideo = (req, res) => {
	console.log('UPLOAD');
	console.log(req.body);

	upload(req, res, (error) => {
		if(error){
			console.log(error);
			var payload = {
				api: {
					success: false,
					message: 'File upload error',
					error: error
				}
			}

			return res.send(payload);
		}

		console.log('success');
		var payload = {
			api: {
				success: true,
				message: 'File upload successful'
			}
		}

		res.send(payload);
	})
}


exports.addDevice = async (req, res) => {
	console.log('/user/add-device');
	console.log('req.body', req.body);

	const device = new Device({
		owner: req.body.owner,
		ownerName: req.body.ownerName,
		ownerId: req.body.ownerId,
		deviceName: req.body.deviceName,
		uuid: req.body.uuid
	});

	device.save()
		.then(data => {
			console.log('Added Device to mongodb: ', data);

			var query = { _id: req.body.ownerId };
			var options = {
				$addToSet: {
					devices: {
						id: req.body.uuid
					}
				}
			}

			User.findOneAndUpdate(query, options, { new: true })
				.then(r => {
					console.log(r);
					var response = {
						api: {
							error: false,
							message: 'Device added to owner'
						}
					}

					return res.send(response);
				})
				.catch(err => {
					console.log(err);
					var response = {
						api: {
							error: true,
							message: 'Error adding device'
						}
					}

					return res.send(response);
				})
		})
		.catch(err => {
			console.log('MongoDB error adding device:');
			console.log(err);

			var response = {
				api: {
					error: true,
					message: 'Error adding device'
				}
			}

			return res.send(response);
		});
}

exports.getDevices = async (req, res) => {
	console.log(req.body);

	var email = req.body.email;

	var query = {
		ownerId: req.body.id
	}

	Device.find({
		ownerId: req.body.id
		})
		.then(data => {
			console.log('d');
			console.log(data);
			var devices = data;

			var payload = {
				devices: devices
			}
			return res.send(payload);
		})
		.catch(err => {
			console.log(err);
			return res.send(err);
		})

}
