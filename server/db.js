const { Pool } = require("pg");

let pool;
let config;

if (process.env.DATABASE_URL) {
  //it's set in Heroku
  const connectionString = process.env.DATABASE_URL;
  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  //default local config
  config = {
    user: "postgres",
    host: "localhost",
    database: "qa",
    password: "qa-admin",
    port: 5432,
  };
}
pool = new Pool(config);

exports.Connection = pool;
