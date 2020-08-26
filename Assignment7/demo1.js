
const fs = require("fs");


let readfunction = () => {
    try {
        const Path = "C:/Users/akshay/Desktop/akshay/MEAN/node js/nodejs day3/demo.txt";
        const fileContent = fs.readFileSync(Path, { encoding: "utf-8" });
    
        console.log(fileContent);
      } catch (err) {
        console.log("There is some problem", err.message);
      }
    
};


readfunction();