const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require("./db_config");


const dbForgotFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config.db_config);

    await connection.connectAsync();

    const sql = "UPDATE user_tbl SET password = ?, confirm_password = ? WHERE email = ? AND username = ?";
    
    const recvForgotData =  await connection.queryAsync(sql, [
      input.password,
      input.confirm_password,
      input.email,
      input.username
    ]);

    await connection.endAsync();

    //({ message : "Record deleted successfully." })
    //return ({ message : "Your inserted data added successfully."});

    return(recvForgotData);

  }
  catch (err) {

    return ({ message : "Error while resetting your password."});
  }

};

module.exports = { dbForgotFun };