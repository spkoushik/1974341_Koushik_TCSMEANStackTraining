let fs = require("fs");
let obj = require("readline-sync");
let fname = obj.question("Enter the firstname ");
console.log("your firstname is "+fname);
let lname = obj.question("Enter the lastname ");
console.log("your lastname is "+lname);
let gender = obj.question("Enter the gender ");
console.log("your firstname is "+gender);
let email = obj.question("Enter the email ");
console.log("your email is "+email);
var datetime = new Date();
console.log(datetime);
var array = new Array();
array.push(fname);
array.push(lname);
array.push(gender);
array.push(email);
array.push(datetime);
debugger;
let data  = fs.readFileSync("log.json")
var recjson = JSON.parse(data)
recjson.push(array)
debugger;
let recjsonData = JSON.stringify(recjson)
fs.writeFileSync("log.json",recjsonData )
