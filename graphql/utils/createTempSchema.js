const { makeExecutableSchema, addMockFunctionsToSchema } = require('apollo-server');

const createTempSchema = (typdefs) => {
  const tempSchema = makeExecutableSchema({
    typeDefs: [typdefs]
  });
  addMockFunctionsToSchema({ schema: tempSchema });

  return tempSchema;
}

module.exports = createTempSchema;