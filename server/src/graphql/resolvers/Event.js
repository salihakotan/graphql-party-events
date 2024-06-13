export const Event ={
    user: async(parent, args,{db}) => await db.User.findById(parent.user),
    location: async(parent, args,{db}) => await db.Location.findById(parent.location),
    participants: async(parent, args,{db}) => await db.Participant.find({event:parent.id})
  }
