const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require("./db_config");


const dbDeleteFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config.db_config);

    await connection.connectAsync();

    const sql = "DELETE FROM user_tbl WHERE email = ? AND password = ?";
    
    const recvDeleteData =  await connection.queryAsync(sql, [
      input.email,
      input.password
    ]);

    await connection.endAsync();

    //return ({ message : "Record deleted successfully." });
    return (recvDeleteData);
  }
  catch (err) {

    return ({ message : "Error while deleting data."});
  }

};

module.exports = { dbDeleteFun };