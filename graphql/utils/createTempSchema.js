import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from "apollo-server-express";

const createTempSchema = (typdefs) => {
  const tempSchema = makeExecutableSchema({
    typeDefs: [typdefs],
  });
  addMockFunctionsToSchema({ schema: tempSchema });

  return tempSchema;
};

export default createTempSchema;
