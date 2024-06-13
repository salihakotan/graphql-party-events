export const User={
    events: async (parent, args,{db}) => await db.Event.find({user:parent.id})  }