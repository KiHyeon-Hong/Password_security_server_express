const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');

// const passwordSecurityServer = require('./PasswordSecurity');
const passwordSecurityServer = require('@kihyeon-hong/password_security_server');
const app = express();

app.get('/Test', (req, res) => {
	console.log('request and response test');
	res.send(new passwordSecurityServer.passwordSecurityServer.Test().test());
});

app.get('/Temp', (req, res) => {
	res.send("temp code");
  });

app.listen(65001, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				console.log('server running at ' + body + ':65001');
		}
	);
});
