import { nanoid } from "nanoid";

export const Mutation = {
    addUser: async(parent, { data },{db,pubsub}) => {
      const newUser = new db.User({
        ...data
      })

      const user = await newUser.save()

      pubsub.publish("userCreated", {userCreated:user})
      return user;
    },

    updateUser: async(parent, { id, data },{db,pubsub}) => {
      const user_index = await db.User.findById(id);
      if (!user_index) {
        throw new Error("User not found");
      }

      const updated_user = await db.User.findByIdAndUpdate(id,data,{
        new:true
      })

      return updated_user;
    },

    deleteUser: async(parent, { id },{db,pubsub}) => {
      const user_index = await db.User.findById(id);
      if (!user_index) {
        throw new Error("User not found");
      }

      const deleted_user = await db.User.findByIdAndDelete(id)


      return deleted_user;
    },

    deleteAllUsers: async(_,__,{db,pubsub}) => {
      const delete_users = await db.User.deleteMany({})

      return {
        count: delete_users.deletedCount,
      };
    },

    addParticipant: async(parent, { data },{db,pubsub}) => {
      const newParticipant = new db.Participant({
        ...data
      })

      const participant = await newParticipant.save()

      //which event -> have must add to that array's participants -> event.participants.push(participant) 
      const event = await db.Event.findById(data.event)
      event.participants.push(participant)
      await event.save()

       
      // addToEvent.save()
     

      pubsub.publish("participantAttended", {participantAttended: participant})
      return participant;
    },
    updateParticipant: async(parent, { id, data },{db,pubsub}) => {
      const participant_index = await db.Participant.findById(id);
      if (!participant_index) {
        throw new Error("participant not found");
      }

      const updated_participant = await db.Participant.findByIdAndUpdate(id,data,{
        new:true
      })

      return updated_participant;
    },
    deleteParticipant: async(parent, { id },{db,pubsub}) => {
      const participant_index = await db.Participant.findById(id);
      if (!participant_index) {
        throw new Error("participant not found");
      }

      const will_delete_participant = await db.Participant.findById(id)

      // console.log("willdelete participant ********* ", will_delete_participant)
      // console.log("EVENT: willdelete participant ********* ", )


      const eventt = await db.Event.findById(will_delete_participant.event)
     

      eventt.participants.splice(will_delete_participant,1)
      await eventt.save()

      const deleted_participant = await db.Participant.findByIdAndDelete(id)


      // pubsub.publish("participantAttended", {participantAttended: deleted_participant})

      return deleted_participant;
    },
    deleteAllParticipants:async (_,__,{db,pubsub}) => {
      
      const delete_participants = await db.Participant.deleteMany({})

      return {
        count: delete_participants.deletedCount,
      };
    },

    addLocation: async(parent, { data },{db,pubsub}) => {
      const newLocation = new db.Location({
        ...data
      })

      const location = await newLocation.save()
      
      return location;
    },
    updateLocation: async(parent, { id, data },{db,pubsub}) => {
      const location_index = await db.Location.findById(id)
      if (!location_index) {
        throw new Error("location not found");
      }

      const updated_location =  await db.Location.findByIdAndUpdate(id,data,{
        new:true
      })


      return updated_location;
    },
    deleteLocation: async(parent, { id },{db,pubsub}) => {
      const location_index = await db.Location.findById(id)
      if (!location_index) {
        throw new Error("location not found");
      }

      const deleted_location = await db.Location.findByIdAndDelete(id)


      return deleted_location;
    },
    deleteAllLocations: async(_,__,{db,pubsub}) => {

      const delete_locations = await db.Location.deleteMany({})

      return {
        count: delete_locations.deletedCount,
      };
    },

    addEvent:async (parent, { data },{db,pubsub}) => {
      const newEvent = new db.Event({
          ...data
      })

      const event = await newEvent.save()

      const user = await db.User.findById(data.user)
      user.events.push(event)
      await user.save()

      pubsub.publish("eventCreated", {eventCreated: event})
      return event;
    },
    updateEvent: async(parent, { id, data },{db,pubsub}) => {
      const event_index = await db.Event.findById(id)
      if (!event_index) {
        throw new Error("event not found");
      }

      const updated_event = await db.Event.findByIdAndUpdate(id,data,{
        new:true
      })

      return updated_event;
    },
    deleteEvent:async (parent, { id },{db,pubsub}) => {
      const event_index = await db.Event.findById(id)
      if (!event_index) {
        throw new Error("event not found");
      }

      const will_delete_event = await db.Event.findById(id)

      const userr = await db.User.findById(will_delete_event.user)


      userr.events.splice(will_delete_event,1)
      await userr.save()


      const deleted_event = await db.Event.findByIdAndDelete(id)

     


      
      // pubsub.publish("eventDeleted", {eventDeleted: deleted_event})

      return deleted_event;
    },
    deleteAllEvents: async(_,__,{db,pubsub}) => {
      
      const delete_events = await db.Event.deleteMany({})

      return {
        count: delete_events.deletedCount,
      };
    },
  }