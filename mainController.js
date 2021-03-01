const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');

const passwordSecurityServer = require('./PasswordSecurity');
const app = express();

app.get('/test', (req, res) => {
  res.send(passwordSecurityServer.passwordSecurityServer.test());
});

app.listen(65001, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				console.log('server running at ' + body + ':65001');

		}
	);
});
