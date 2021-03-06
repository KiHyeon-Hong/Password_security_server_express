const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// const PasswordSecurityServer = require('./PasswordSecurity');
const PasswordSecurityServer = require('@kihyeon-hong/password_security_server');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/passwordModelDistributionWeight', (req, res, next) => {
	const name = 'weights.bin';

	res.setHeader('Content-Disposition', `attachment; filename=${name}`);

	var pwd = new PasswordSecurityServer.PasswordSecurity.PasswordSecurity();
	res.sendFile(pwd.passwordModelDistribution(req.query.versionData, req.query.comment) + `/weights.bin`);
});

app.get('/passwordModelDistributionModel', (req, res, next) => {
	const name = 'model.json';

	res.setHeader('Content-Disposition', `attachment; filename=${name}`);

	var pwd = new PasswordSecurityServer.PasswordSecurity.PasswordSecurity();
	res.sendFile(pwd.passwordModelDistribution(req.query.versionData, req.query.comment) + `/model.json`);
});

app.get('/passwordModelDistributionDict', (req, res, next) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	// console.log('IP : ' + ip);
	
	res.send("get /passwordModelDistributionDict")
});

app.post('/passwordDictUpdate', (req, res, next) => {
	var query = req.body;
	var pwd = new PasswordSecurityServer.PasswordSecurity.PasswordSecurity();

	res.send(pwd.passwordDictUpdate(query.dictionary, query.comment));
});

app.post('/passwordModelParaUpdate', (req, res, next) => {
	var query = req.body;
	var pwd = new PasswordSecurityServer.PasswordSecurity.PasswordSecurity();

	res.send(pwd.passwordModelParaUpdate(query));
});

app.listen(65001, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				console.log('server running at ' + body + ':65001');
		}
	);
});
