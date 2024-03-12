const accountId=123
let accountEmail="pankaj@gmail.com"
var accountPassword="9876"
accountCity="Delhi"
let accountState;
// accountId=543 //not allowed(const)
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
accountEmail="yadav@gmail.com"
accountPassword="8712"
accountCity="bengaluru"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
