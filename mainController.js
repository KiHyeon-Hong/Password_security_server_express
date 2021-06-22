const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');

const PasswordSecurityServer = require('./PasswordSecurity');
// const passwordSecurityServer = require('@kihyeon-hong/password_security_server');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

/*
app.get('/download', (req, res, next) => {
	const name = 'weights.bin';  
	res.setHeader('Content-Disposition', `attachment; filename=${name}`); // 이게 핵심 
	res.sendFile(__dirname + '/weights.bin');
});
*/

app.get('/passwordModelDistributionWeight', (req, res, next) => {
	const name = 'weights.bin';

	res.setHeader('Content-Disposition', `attachment; filename=${name}`);
	res.sendFile(__dirname + '/PasswordSecurity/passwordModel/0.1/weights.bin');
});

app.get('/passwordModelDistributionModel', (req, res, next) => {
	const name = 'model.json';

	res.setHeader('Content-Disposition', `attachment; filename=${name}`);
	res.sendFile(__dirname + '/PasswordSecurity/passwordModel/0.1/model.json');
});

app.get('/passwordModelDistributionDict', (req, res, next) => {
	res.send("get /passwordModelDistributionDict")
});

app.post('/passwordDictUpdate', (req, res, next) => {
	var query = req.body;
	console.log(query);
	
	res.send("get /passwordDictUpdate");
});

app.post('/passwordModelParaUpdate', (req, res, next) => {
	var query = req.body;
	console.log(query);
	
	res.send("get /passwordModelParaUpdate");
});

app.listen(65001, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				console.log('server running at ' + body + ':65001');
		}
	);
});
