const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbDetails = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptExam",
};

async function addMsg(msg) {
  const connection = mysql.createConnection(dbDetails);
  await connection.connectAsync();

  const query = `insert into messages(message) values(?)`;

  await connection.queryAsync(query, [msg.message]);

  await connection.endAsync();
}

async function getMsgs() {
  const connection = mysql.createConnection(dbDetails);
  await connection.connectAsync();

  const query = `select * from messages`;
  const list = await connection.queryAsync(query, []);

  await connection.endAsync();

  return list;
}

module.exports = { addMsg, getMsgs };
