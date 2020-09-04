const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require("./db_config");


const dbAuthFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config.db_config);

    await connection.connectAsync();

    const sql = "SELECT email, password FROM user_tbl WHERE email = ? AND password = ?";
    
    const recvAuthData =  await connection.queryAsync(sql, [
      input.email,
      input.password
    ]);

    await connection.endAsync();

    //({ message : "Record deleted successfully." })
    return recvAuthData;
  }
  catch (err) {

    return ({ message : "Error while doing authentication."});
  }

};

module.exports = { dbAuthFun };