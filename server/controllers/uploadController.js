require('dotenv').config({ path: 'variables.env' });
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const mongoose = require('mongoose');
const moment = require('moment');

AWS.config.region = 'us-east-1';
var s3 = new AWS.S3();
const s3bucket = 'dnbkrvideomanager';

const User = mongoose.model('User');
const Media = mongoose.model('Media');

exports.uploadVideo = async (req, res) => {
	console.log('upload content');

	const upload = multer({
		storage: multerS3({
			s3: s3,
			bucket: s3bucket,
			key: function(req, file, cb){
				const path = 'content/' + req.body.userId;
				var title = req.body.title.replace(/ /g, '_');

				var time = moment().local().format('YYYYMMDD_HHmm');
				var fileName = time.toString() + '_' + title + '.mov';
				var key = path + '/' + fileName;

				cb(null, key)
			},
			acl: 'public-read'
		})
	}).array('file', 1);

	upload(req, res, (err) => {
		console.log(req.body);
		if(err){
			console.log(err);
			var payload = {
				api: {
					success: false,
					message: 'File upload error',
					error: error
				}
			}

			return res.send(payload);
		}else{
			console.log('File Upload Success');
			var location = req.files[0].location;
			var time = moment().local().format('YYYY-MM-DD HH:mm');
			const media = new Media({
				type: 'video',
				owner_id: req.body.userId,
				owner_email: req.body.userEmail,
				created_at: time,
				title: req.body.title,
				description: req.body.description,
				location: location
			});

			media.save()
				.then(r => {
					console.log('Media entry saved to database');
					var query = { _id: req.body.userId };
					var options ={
						$addToSet: {
							media: {
								content_id: r._id.toString(),
								location: r.location,
								title: r.title
							}
						}
					}

					User.findOneAndUpdate(query, options, { new: true })
						.then(data => {
							console.log('Media added to user library');
							var payload = {
								api: {
									success: true,
									message: 'File Upload Successful'
								}
							}

							res.send(payload);
						})
						.catch(err => {
							console.log(err);
							res.send(err);
						})
				})
				.catch(err => {
					console.log(err);
					res.send(err);
				});
		}
	})
}
