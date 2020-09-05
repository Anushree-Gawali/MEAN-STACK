const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");


let readAllUser = async () => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER";
  let results = await connection.queryAsync(sql);

  await connection.endAsync();
  return results;
};


let readUserByQuery = async () => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE fname=? AND city=? ";
  let results = await connection.queryAsync(sql, ["shubham", "nashik"]);

  await connection.endAsync();
  return results;
};


let readUserByQueryParams = async (fname,city) => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE fname=? AND city=? ";
  let results = await connection.queryAsync(sql, [fname,city]);

  await connection.endAsync();
  return results;
};


let readUserByQueryJsonParam = async (user) => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE fname=? AND city=?";
  let results = await connection.queryAsync(sql, [user.fname, user.city]);

  await connection.endAsync();
  return results;
};

module.exports = {
  readAllUser,
  readUserByQuery,
  readUserByQueryParams,
  readUserByQueryJsonParam,
};