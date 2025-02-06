const { printName, lastName } = require("./printName");

printName(`Fernando ${lastName}`);


//Modulo nativo
const os = require('os');

console.log(os.type());