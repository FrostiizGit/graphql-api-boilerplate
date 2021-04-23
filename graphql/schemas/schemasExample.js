import { gql } from "apollo-server-express";
import createTempSchema from "../utils/createTempSchema.js";

const exampleTypedefs = gql`
  type Query {
    ping: String
    getExamples: [String]!
    getExamplesFromDB: [String]!
  }
  type Mutation {
    addExample(example: String!): [String]!
    addExampleToDB(example: String!): [String]!
  }
  type Subscription {
    newExample: [String]
  }
`;

const tempSchema = createTempSchema(exampleTypedefs);

export default tempSchema;
