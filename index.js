import "./graphql/utils/dotenv.js";
import express from "express";
import { ApolloServer, mergeSchemas } from "apollo-server-express";
import http from "http";

// Using the dotenv file in utils to inject the invironment variables in process.env
const { API_PORT, GRAPHQL_ENDPOINT, SUBSCRIPTIONS_ENDPOINT } = process.env;

// Get all typedefs & resolvers to merge schemas
import typeDefs from "./graphql/schemas.js";
import resolvers from "./graphql/resolvers.js";

// Whole graphQL schema
const schema = mergeSchemas({
  schemas: typeDefs,
  resolvers,
});

// Create apollo server for our graphql queries & mutations
const apolloServer = new ApolloServer({
  schema,
  subscriptions: {
    path: SUBSCRIPTIONS_ENDPOINT,
  },
  context: ({ req, res }) => {
    // Bearer token used for authorization
    const token = req?.headers?.authorization || false;
    // Adding res to context, usefull for res headers such as cookies
    return { token, res };
  },
});
await apolloServer.start();

// Apply express middleware to apollo
const app = express();
apolloServer.applyMiddleware({ app, path: GRAPHQL_ENDPOINT });

// Create http server and add subscriptions handlers to it
const subscriptionServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(subscriptionServer);

// Listening to our subscription & apollo servers
await new Promise((resolve) => subscriptionServer.listen(API_PORT, resolve));

console.log(
  `🧙🏻‍♂️ GraphQL API ready at url:${API_PORT}${apolloServer.graphqlPath}`
);
console.log(
  `🧙🏻‍♂️ GraphQL subscriptions ready at url:${API_PORT}${apolloServer.subscriptionsPath}`
);
