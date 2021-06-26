const PasswordSecurityServer = require('./PasswordSecurity');

var pwd = new PasswordSecurityServer.PasswordSecurity.PasswordSecurity();

/*
console.log(pwd.passwordModelTrain());
console.log(pwd.passwordModelDistribution());
console.log(pwd.passwordDictUpdate());
console.log(pwd.passwordModelParaUpdate());
console.log(pwd.passwordModelComment());
console.log(pwd.passwordModelDelete());
console.log(pwd.passwordModelVersion());
console.log(pwd.getLog());
*/

// console.log(pwd.passwordModelDistribution('0.1', 'comment'));

// pwd.passwordModelTest();

pwd.passwordModelTest();