export const Query ={
    events: async(_,__,{db}) => await db.Event.find(),
    event: async(parent, args,{db}) => await db.Event.findById(args.id),

    locations: async(_,__,{db}) => await db.Location.find(),
    location: async(parent, args,{db}) =>await db.Location.findById(args.id),

    users: async(_,__,{db}) => await db.User.find(),
    user: async(parent, args,{db}) => await db.User.findById(args.id),

    participants: async(_,__,{db}) => await db.Participant.find(),
    participant: async(parent, args,{db}) => await db.Participant.findById(args.id)
  }