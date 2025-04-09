const accountId = 8765432
let accountEmail = "riya@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 198765 -- not allowed
accountEmail = "rb@gamil.com"
accountPassword = "23456"
accountCity = "Punjab"

/*
prefer not to use to var
because of issue in block scope and functional scope
*/

console.log([accountId,accountEmail,accountPassword,accountCity])
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])