export const Participant={
    user: async(parent, args,{db}) => await db.User.findById(parent.user),
    event: async(parent, args,{db}) => await db.Event.findById(parent.event),

  }