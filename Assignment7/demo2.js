const fs = require("fs");

let readDemo = () => {
  const Path = "C:/Users/akshay/Desktop/akshay/MEAN/node js/nodejs day3/demo.txt";

  fs.readFile(Path, { encoding: "utf-8" }, (err, data) => {
    console.log(data);
  });
};

readDemo();

