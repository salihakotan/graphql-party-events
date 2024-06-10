import { createServer } from "node:http";
import { createSchema,createYoga } from "graphql-yoga";
import { PubSub } from "graphql-subscriptions";
import typeDefs from "./graphql/type-defs";
import resolvers from "./graphql/resolvers";
import {db} from "./db";

import {WebSocketServer} from "ws"

import {userServer} from "graphql-ws/lib/use/ws"

const pubsub = new PubSub()

const yoga = createYoga({
  
    graphiql:{
      subscriptionsProtocol: "WS"
    },
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

const wsServer = new WebSocketServer({
  server:server,
  path:graphqlEndpoint
})

// Integrate Yoga's Envelop instance and NodeJS server with graphql-ws
useServer(
  {
    execute: (args) => args.rootValue.execute(args),
    subscribe: (args) => args.rootValue.subscribe(args),
    onSubscribe: async (ctx, msg) => {
      const { schema, execute, subscribe, contextFactory, parse, validate } =
        yogaApp.getEnveloped({
          ...ctx,
          req: ctx.extra.request,
          socket: ctx.extra.socket,
          params: msg.payload
        })
 
      const args = {
        schema,
        operationName: msg.payload.operationName,
        document: parse(msg.payload.query),
        variableValues: msg.payload.variables,
        contextValue: await contextFactory(),
        rootValue: {
          execute,
          subscribe
        }
      }
 
      const errors = validate(args.schema, args.document)
      if (errors.length) return errors
      return args
    }
  },
  wsServer
)

server.listen(4000, ()=> {
  console.info('Server is running on http://localhost:4000')
})
