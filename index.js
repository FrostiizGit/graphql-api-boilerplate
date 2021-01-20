const { ApolloServer, mergeSchemas } = require("apollo-server");
const dotenv = require("dotenv");

const typeDefs = require('./graphql/schemas/schemas');
const resolvers = require('./graphql/resolvers/resolvers');

dotenv.config({ path: ".env" });

const schema = mergeSchemas({
  schemas: typeDefs,
  resolvers
})

const server = new ApolloServer({
	schema,
});

server.listen().then(({ url }) => {
	console.log(`🧙🏻‍♂️ Server ready at ${url}`);
});
