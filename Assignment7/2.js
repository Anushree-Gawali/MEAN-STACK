const fs = require("fs");

let readDemo = () => {
  const Path = "C:/Users/NEETA GAWALI/Desktop/Assignment7/demo.txt";

  fs.readFile(Path, { encoding: "utf-8" }, (err, data) => {
    console.log(data);
  });
};

readDemo();

