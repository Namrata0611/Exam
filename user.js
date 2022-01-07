const mysql = require("mysql");

const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "127.0.0.1",
  user: "root",
  password: "cdac",
  database: "wptexam",
  port: "3306",
};

const connection = mysql.createConnection(dbinfo);
console.log(" connection establish");

const selectUser = async () => {
  const connection = mysql.createConnection(dbinfo);
  connection.connectAsync();
  let sql = `select *from MESSAGE`;
  const list = await connection.queryAsync(sql, [10]);
  return list;
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  connection.connectAsync();
  let sql = `insert into MESSAGE(msgno,message) values(?,?)`;
  connection.queryAsync(sql, [user.msgno, user.message]);
  console.log("record added");

  await connection.endAsync();
};

const user1 = { msgno: 2, message: "cdac kharghar 067 " };
addUser(user1);
const user = { msgno: 1, message: "hii my name is NAMRATA " };
addUser(user);
module.exports = { selectUser, addUser };
