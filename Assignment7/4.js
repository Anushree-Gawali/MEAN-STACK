const fs = require("fs");
const Promise = require("bluebird");

// promisification :: converts all the callback methods and return as Promise
Promise.promisifyAll(fs);

let readDemo = () => {
  const filePath1 = "C:/Users/NEETA GAWALI/Desktop/Assignment7/demo.txt";

  fs.readFileAsync(filePath1, { encoding: "utf-8" })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

readDemo();