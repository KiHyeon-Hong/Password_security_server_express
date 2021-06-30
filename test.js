const PasswordSecurityServer = require('./PasswordSecurity');
// const PasswordSecurityServer = require('@kihyeon-hong/password_security_server');
var pwd = new PasswordSecurityServer.PasswordSecurity.PasswordSecurity();

// pwd.passwordModelTest("abcdefg");

// console.log(pwd.passwordModelTrain('0.2', 'model test'));

// pwd.passwordModelTest();

// pwd.passwordModelDelete('0.3');

// pwd.passwordModelDistribution('0.2', 'test code');


// pwd.passwordDictUpdate('q1w2e3r4', 'test comment!');

console.log(pwd.passwordModelVersion('0.1'));