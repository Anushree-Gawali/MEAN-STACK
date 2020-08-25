const mod1 = require("./xyz/1");
const mod2 = require("./xyz/2");

const mod3 = require("./xyz/3");
const mod4 = require("./xyz/4");

// module 1
console.log(mod1);

const total = mod1.sum(10, 20);
console.log(total);

// module 2
console.log(mod2);

// perform logic
const sumTotal = mod3.sum(1, 2);
console.log("SUM", sumTotal);

// module 4
console.log(mod4);