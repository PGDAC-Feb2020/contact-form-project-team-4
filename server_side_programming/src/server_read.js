const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require("./db_config");


const dbReadFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config.db_config);

    await connection.connectAsync();

    const sql = "SELECT * FROM user_tbl WHERE email = ? AND password = ?";
    
    const recvReadData =  await connection.queryAsync(sql, [
      input.email,
      input.password
    ]);

    await connection.endAsync();

    return recvReadData;
  }
  catch (err) {

    return ({ message : "Error while fetching data."});
  }

};

module.exports = { dbReadFun };