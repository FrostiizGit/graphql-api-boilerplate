const { gql } = require('apollo-server');
const createTempSchema = require('../utils/createTempSchema');

const exampleTypedefs = gql`
  type Query {
    ping: String
    getExamples: [String]!
  }
  type Mutation {
    addExemple(example: String): [String]!
  }
  type Subscription {
    newMsg: [String]
  }
`;

const tempSchema = createTempSchema(exampleTypedefs);

module.exports = tempSchema;