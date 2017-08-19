var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res){
	res.render('index',{
		"title": "Home"
	});
});

router.get('/about', function(req, res){
	res.render('about',{
		"title": "About"
	});
});

router.get('/service', function(req, res){
	res.render('service',{
		"title": "Service"
	});
});

router.get('/contact', function(req, res){
	res.render('contact',{
		"title": "Contact"
	});
});

router.post('/contact/send', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		host: 'smtp.google.com',
		port: 465,
		tls: { rejectUnauthorized: false },
		auth: {
			user: '',
			pass: ""
		}
	});

	var mailOptions = {
		from: 'node webite',
		to:'denisonsare@gmail.com',
		subject: 'test',
		text: 'this is a test',
		html: '<p>this is a test</p>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
		}
		console.log('message send!!!');
	});

	res.redirect('/');
	console.log('message sent');
});


module.exports = router;
