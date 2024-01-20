
// modules.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

//exports
const calc2 = require('./test-module-2');
console.log(calc2.add(2,4));
// can also use destructuring
const {add, multiply, divide} = require('./test-module-2');
console.log(multiply(5, 10));

//caching
// using () to call the method immediately
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
// prints
// Hello from module 3
// Log this beautiful text 😎
// Log this beautiful text 😎
// Log this beautiful text 😎

// We are calling the modules three times but
// Hello from module3 prints only once because of caching

