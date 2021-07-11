const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// const PasswordSecurityServer = require('./PasswordSecurity');
const PasswordSecurityServer = require('@kihyeon-hong/password_security_server');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

var pwd = new PasswordSecurityServer.PasswordSecurity.PasswordSecurity();

app.get('/passwordModelTrain', (req, res, next) => {
	res.send(pwd.passwordModelTrain(req.query.versionData, req.query.comment));
});

app.get('/passwordModelVersion', (req, res, next) => {
	res.send(pwd.passwordModelVersion());
});

app.get('/passwordModelDelete', (req, res, next) => {
	res.send(pwd.passwordModelDelete(req.query.versionData));
});

app.get('/passwordModelComment', (req, res, next) => {
	res.send(pwd.passwordModelComment(req.query.versionData, req.query.comment));
});


app.listen(65001, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				console.log('server running at ' + body + ':65001');
		}
	);
});
