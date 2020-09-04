const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require("./db_config");


const dbUpdateFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config.db_config);

    await connection.connectAsync();

    const sql = "UPDATE user_tbl SET your_name = ?, username = ?, address = ? , mobile = ? WHERE email = ? AND password = ?";
    
    const recvUpdateData =  await connection.queryAsync(sql, [
      input.your_name,
      input.username,
      input.address,
      input.mobile,
      input.email,
      input.password
    ]);

    await connection.endAsync();

    //return ({ message : "You have updated your data successfully." });

    return (recvUpdateData);
  }
  catch (err) {

    return ({ message : "Error while updating data."});
  }

};

module.exports = { dbUpdateFun };