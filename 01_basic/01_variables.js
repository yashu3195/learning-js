const accountId = 144553
let accountEmail = "laalsaarewa@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
//accountId = 2 not allowed

accountEmail = "anubhav@workmail.com"
accountPassword = "666456"
accountCity = "Bengaluru"
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/* prefer not to use var, because of issue in block scope and functional scope */