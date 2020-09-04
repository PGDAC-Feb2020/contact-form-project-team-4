const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require("./db_config");

const dbAddFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config.db_config);

    await connection.connectAsync();
  
    const sql = "INSERT INTO user_tbl (your_name, username, email, password, confirm_password) VALUES (?, ?, ?, ?, ?)";
  
    const recvAddData = await connection.queryAsync(sql, [
      input.your_name,
      input.username,
      input.email,
      input.password,
      input.confirm_password
    ]);
  
    await connection.endAsync();
  
    console.log(recvAddData);

    return ({ message : "Registered successfully."});
  
  }
  catch (err) {

    return ({ message: "Error while registering."});
  }

};

module.exports = { dbAddFun };