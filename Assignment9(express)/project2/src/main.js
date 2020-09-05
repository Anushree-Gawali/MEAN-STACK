const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();


app.get("/", async (req, res) => {
  try {
    const fname = req.query.fname;
    const city = req.query.city;
    

    const connection = mysql.createConnection({
      user: "root",
      password: "123456789",
      host: "localhost",
      database: "anushree",
    });

    await connection.connectAsync();

    let sql =
      "INSERT INTO USER (fname,city) VALUES (?, ?)";
    await connection.queryAsync(sql, [fname,city]);

    await connection.endAsync();

    const json = { message: "sucessful !!!!" };
  
  } 
catch (err) {
    const json = { message: "Error Occured!!" };
    res.json(json);
  }
});
app.listen(5000);