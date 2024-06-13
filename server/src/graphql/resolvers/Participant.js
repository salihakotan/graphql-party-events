export const Participant={
    user: async(parent, args,{db}) => await db.User.findById(parent.user),
  }