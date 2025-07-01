const accountId = 123456
let accountName = "tester"
var accountCode = "5665656"
accountValidity = true

// accountId = 12121212
console.log(accountId);

// javascript was block scope language, for creating variables, always use either const or let, var is not ideal because if you mistakenly use identical variable in project it will change the value of the that first variable as well/
console.table([accountId, accountName, accountCode, accountValidity])
