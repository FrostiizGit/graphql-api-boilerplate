import pubsub from "../utils/pubsub.js";

// Example using the database
import ExampleModel from "../../database/models/modelExample.js";

// Example without a database connection
let examplesArray = [];

const resolvers = {
  Query: {
    getExamples: () => examplesArray,
    async getExamplesFromDB() {
      const result = await ExampleModel.findAll();
      const allExamples = result.map((row) => row.dataValues.example) || [];
      return allExamples;
    },
  },
  Mutation: {
    addExample(root, args, context) {
      const { example: ex } = args;
      examplesArray.push(ex);
      pubsub.publish("NEW_EXAMPLE", { newExample: examplesArray });
      return examplesArray;
    },
    async addExampleToDB(root, args, context) {
      const { example } = args;

      const result = await ExampleModel.sync().then(() => {
        return ExampleModel.create({ example });
      });

      return [result.dataValues.example];
    },
  },
  Subscription: {
    newExample: {
      subscribe: () => pubsub.asyncIterator(["NEW_EXAMPLE"]),
    },
  },
};

export default resolvers;
