export const Query ={
    events: async(_,__,{db}) => db.Event.find(),
    event: (parent, args,{db}) => db.events.find((event) => event.id == args.id),

    locations: (_,__,{db}) => db.locations,
    location: (parent, args,{db}) =>
      db.locations.find((location) => location.id == args.id),

    users: (_,__,{db}) => db.users,
    user: (parent, args,{db}) => db.users.find((user) => user.id == args.id),

    participants: (_,__,{db}) => db.participants,
    participant: (parent, args,{db}) =>
      db.participants.find((participant) => participant.id == args.id),
  }