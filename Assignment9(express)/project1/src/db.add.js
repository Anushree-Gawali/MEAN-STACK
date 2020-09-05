const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

let addRecord = async () => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql =
    "INSERT INTO USER (fname,city) VALUES (?, ?)";
  await connection.queryAsync(sql, [
    "anushree",
    "kalyan",
  ]);

  await connection.endAsync();
};


let addRecordWithParam = async (fname,city) => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql =
    "INSERT INTO USER (fname,city) VALUES (?, ?)";
  await connection.queryAsync(sql, [fname, city]);

  await connection.endAsync();
};


let addRecordWithJsonParam = async (user) => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql =
    "INSERT INTO USER (fname,city) VALUES (?, ?)";
  await connection.queryAsync(sql, [
    user.fname,
    user.city,
  ]);

  await connection.endAsync();
};

module.exports = { addRecord, addRecordWithParam, addRecordWithJsonParam };