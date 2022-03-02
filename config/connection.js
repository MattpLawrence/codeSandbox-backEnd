// This file is designed to set up sequelize so that we connect or MySql2 database to the server.

const Sequelize = require("sequelize");
require("dotenv").config();

//use jaws_db as if to host to Heroku
// using .env to show how to use hidden variable.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306
      }
    );

// export so that server can sink on start
module.exports = sequelize;
