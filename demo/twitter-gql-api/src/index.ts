import { readFileSync } from 'fs';
import { join } from 'path';
var cors = require('cors');

import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';

import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './graphql/resolvers';

const schemaFile: string = join(__dirname, '../../schema.graphql');
const typeDefs = readFileSync(schemaFile, 'utf8');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
app.listen(4000);

console.log('Running a Twitter GraphQL API at localhost:4000/graphql');
