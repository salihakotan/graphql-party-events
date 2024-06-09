export const Subscription ={
    userCreated:{
      subscribe: (_,__,{pubsub}) => pubsub.asyncIterator("userCreated")
    },
    eventCreated:{
      subscribe: (_,__,{pubsub}) => pubsub.asyncIterator("eventCreated")
    },
    participantAttended:{
      subscribe: (_,__,{pubsub}) => pubsub.asyncIterator("participantAttended")
    },
  }