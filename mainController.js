const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');

const passwordSecurityServer = require('./PasswordSecurity');
const app = express();

app.get('/Test', (req, res) => {
  res.send(new passwordSecurityServer.passwordSecurityServer.Test().test());
});

app.listen(65001, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				console.log('server running at ' + body + ':65001');

		}
	);
});
