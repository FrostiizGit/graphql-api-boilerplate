# graphql-api-boilerplate

A complete GraphQL API using NodeJS (requires module support). It uses `apollo-server-express` and supports subscriptions

## Meh I don't need subscriptions

If you don't need subscriptions you can replace `index.js` with the `indexNoSubs.js` in the `alternatives` folder.

## PostgreSQL alternative

If you don't need PostgreSQL you can safely delete the `database` folder and removes those packages:

- `npm uninstall pg pg-hstore sequelize`

It uses sequelize ORM and connects to a PostgreSQL database. Also configure the needed environment variables:

- `DB_HOST=myDbHost`
- `DB_PORT=myDbPort`
- `DB_NAME=myDbName`
- `DB_USER=myDbUser`
- `DB_PASSWORD=myUserPassword`

## Add .env file

.env file to add variables to the server, they are injected to `process.env` using the `dotenv` module.

- `NODE_ENV=production` to disable playground and introspection.
- `API_PORT=yourPort` to set API port
- `GRAPHQL_ENDPOINT='/graphql'` to set the graphQL endpoint
- `SUBSCRIPTIONS_ENDPOINT='/subscriptions'` to set the subscriptions endpoint
