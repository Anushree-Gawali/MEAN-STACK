const Promise =require("bluebird");
const mysql=require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db={
    host:"localhost",
    user:"root",
    password:"123456789",
    database:"mean"
};
let adddetails = async () => {
    const connection = mysql.createConnection(db);
    await connection.connectAsync();
  
    let sql =
      "INSERT INTO MEAN (ID,USERNAME) VALUES (?, ?)";
    let operation = await connection.queryAsync(sql, [
      "3",
      " Supriya",
    ]);
  
    await connection.endAsync();
    return operation;
  };
  
  adddetails();