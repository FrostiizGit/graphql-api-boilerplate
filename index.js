const { ApolloServer, mergeSchemas } = require("apollo-server");
const dotenv = require("dotenv");

const typeDefs = require("./graphql/schemas");
const resolvers = require("./graphql/resolvers");

dotenv.config({ path: ".env" });

const schema = mergeSchemas({
  schemas: typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  subscriptions: {
    path: "/subs",
  },
});

server
  .listen({
    port: 28888,
  })
  .then(({ url, subscriptionsUrl }) => {
    console.log(`🧙🏻‍♂️ GraphQL API ready at ${url}`);
    console.log(`🧙🏻‍♂️ GraphQL Subscriptions ready at ${subscriptionsUrl}`);
  });
