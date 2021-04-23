import { Sequelize } from "sequelize";
import database from "../instance.js";

const ExampleModel = database.define(
  "exampleModel",
  {
    example: {
      type: Sequelize.STRING,
    },
  },
  { underscored: true }
);

export default ExampleModel;
