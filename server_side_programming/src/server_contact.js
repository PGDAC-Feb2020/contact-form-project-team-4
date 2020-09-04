const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require("./db_config");


const dbContactFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config.db_config);

    await connection.connectAsync();

    const sql = "INSERT INTO cntact_tbl (your_name, email, mobile, subject, comment) VALUES (?, ?, ?, ?, ?)";
    
    const recvAuthData =  await connection.queryAsync(sql, [
      input.your_name,
      input.email,
      input.mobile,
      input.subject,
      input.comment
    ]);

    await connection.endAsync();

    //({ message : "Record deleted successfully." })
    return ({ message : "Your inserted data added successfully."});
  }
  catch (err) {

    return ({ message : "Error while adding your data."});
  }

};

module.exports = { dbContactFun };