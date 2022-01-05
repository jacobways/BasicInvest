const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PW,
    "database": process.env.DB_NAME,
    "host": process.env.JAWSDB_URL,
    "dialect": "mysql"
  }
}
