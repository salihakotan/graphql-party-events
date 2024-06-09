export const User={
    events: (parent, args,{db}) =>
      db.events.filter((event) => event.user_id == parent.id),
  }