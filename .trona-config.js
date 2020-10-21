const { Pool } = require("pg");

const connection = new Pool({
  user: "qa-admin",
  host: "localhost",
  database: "qa",
  password: "qa-admin",
  port: 5432,
});

connection.connect((err) => {
  if (err) throw err;
  console.info("Connected!");
});

module.exports = {
  evolutionsFolderPath: ["db", "evolutions"],
  tableName: "db_evolutions",
  runQuery(query) {
    return new Promise((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(result.rows);
        }
      });
    });
  },
};
