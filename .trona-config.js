const { Connection } = require("./server/db");

module.exports = {
  evolutionsFolderPath: ["db", "evolutions"],
  tableName: "db_evolutions",
  runQuery(query) {
    return new Promise((resolve, reject) => {
      Connection.query(query, (err, result) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(result.rows);
        }
      });
    });
  },
};
