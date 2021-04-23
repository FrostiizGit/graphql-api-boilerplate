import { gql } from "apollo-server-express";
import createTempSchema from "../utils/createTempSchema.js";

const typedefs = gql`
  type Query {
    ping: String
  }
`;

const tempSchema = createTempSchema(typedefs);

export default tempSchema;
