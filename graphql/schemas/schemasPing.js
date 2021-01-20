const { gql } = require('apollo-server');
const createTempSchema = require('../utils/createTempSchema');

const typedefs = gql`
  type Query {
    ping: String
  }
`;

const tempSchema = createTempSchema(typedefs);

module.exports = tempSchema;