const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');

const passwordSecurityServer = require('./PasswordSecurity');
// const passwordSecurityServer = require('@kihyeon-hong/password_security_server');
const app = express();

app.get('/Test', (req, res) => {
	console.log('request and response test');
	res.send(new passwordSecurityServer.passwordSecurityServer.Test().test());
});

app.get('/Temp', (req, res) => {
	var pwd = new passwordSecurityServer.passwordSecurity.passwordSecurity();
	res.send(pwd.test());
});

app.get('/download', (req, res, next) => {
	const name = 'weights.bin';  
	res.setHeader('Content-Disposition', `attachment; filename=${name}`); // 이게 핵심 
	res.sendFile(__dirname + '/weights.bin');
});

app.get('/passwordModelDistributionWeight', (req, res, next) => {
	const name = 'weights.bin';  
	res.setHeader('Content-Disposition', `attachment; filename=${name}`); // 이게 핵심 
	res.sendFile(__dirname + '/weights.bin');
});

app.get('/passwordModelDistributionModel', (req, res, next) => {
	const name = 'weights.bin';  
	res.setHeader('Content-Disposition', `attachment; filename=${name}`); // 이게 핵심 
	res.sendFile(__dirname + '/weights.bin');
});

app.get('/passwordModelDistributionDict', (req, res, next) => {
	const name = 'weights.bin';  
	res.setHeader('Content-Disposition', `attachment; filename=${name}`); // 이게 핵심 
	res.sendFile(__dirname + '/weights.bin');
});

app.listen(65001, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				console.log('server running at ' + body + ':65001');
		}
	);
});
