const pubsub = require("../utils/pubsub");

let example = [];

const resolvers = {
  Query: {
    getExamples: () => example
  },
  Mutation: {
    addExemple(root, args, context) {
      const { example: ex } = args;
      example.push(ex);
      pubsub.publish('POST_ADDED', { newMsg: example});
      return example;
    }
  },
  Subscription: {
    newMsg: {
      subscribe: () => pubsub.asyncIterator(['POST_ADDED'])
    },
  }
}

module.exports = resolvers;