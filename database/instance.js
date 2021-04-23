import Sequelize from "sequelize";

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  port: DB_PORT,
  pool: {
    max: 20,
    min: 0,
    idle: 10000,
  },
  logging: process.env.NODE_ENV === "dev" ? console.log : false,
});

export default sequelize;
