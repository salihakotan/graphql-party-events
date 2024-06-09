import { createServer } from "node:http";
import { createSchema,createYoga } from "graphql-yoga";
import { PubSub } from "graphql-subscriptions";
import typeDefs from "./graphql/type-defs";
import resolvers from "./graphql/resolvers";
import {db} from "./db";


const pubsub = new PubSub()

const yoga = createYoga({
   graphqlEndpoint:"/",
  
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context:{
    db,
    pubsub
   },
});

const server = createServer(yoga);

server.listen(4000, ()=> {
  console.info('Server is running on http://localhost:4000')
})
