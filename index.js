const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { events, locations, users, participants } = require("./data.json");

const typeDefs = gql`

    type Event {
        id:Int!
        title:String!
        desc:String!
        date:String!
        from:String
        to:String
        location_id:Int!
        user_id:Int!
    }

    type Location{
        id:Int!
        name:String!
        desc:String
        lat:Float
        lng:Float
    }

    type User{
        id:Int!
        username:String!
        email:String!
    }

    type Participant{
        id:Int!
        user_id:Int!
        event_id:Int!
    }

    type Query{
        events: [Event!]!
        event(id:Int!): Event!

        locations: [Location!]!
        location(id:Int!): Location!

        users:[User!]!
        user(id:Int!): User!


        participants: [Participant!]!
        participant(id:Int!): Participant!
    }

`;

const resolvers = {
  Query: {
        events: ()=> events,
        event: (parent,args) => events.find((event)=> event.id=== args.id),

        locations: ()=> locations,
        location:(parent,args)=> locations.find((location)=> location.id ===args.id),

        users: ()=> users,
        user:(parent,args)=> users.find((user)=> user.id == args.id),



        participants: ()=> participants
        
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      //options
    }),
  ],
});

server.listen().then(({ url }) => console.log(`Server is up at ${url}`));
