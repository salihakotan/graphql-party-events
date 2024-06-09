import { nanoid } from "nanoid";

export const Mutation = {
    addUser: (parent, { data },{db,pubsub}) => {
      const user = {
        id: nanoid(),
        ...data,
      };
      db.users.push(user);
      pubsub.publish("userCreated", {userCreated:user})
      return user;
    },

    updateUser: (parent, { id, data },{db,pubsub}) => {
      const user_index = db.users.findIndex((user) => user.id == id);
      if (user_index === -1) {
        throw new Error("User not found");
      }

      const updated_user = (db.users[user_index] = {
        ...db.users[user_index],
        ...data,
      });

      return updated_user;
    },

    deleteUser: (parent, { id },{db,pubsub}) => {
      const user_index = db.users.findIndex((user) => user.id == id);
      if (user_index === -1) {
        throw new Error("User not found");
      }

      const deleted_user = db.users[user_index];

      db.users.splice(user_index, 1);

      return deleted_user;
    },

    deleteAllUsers: (_,__,{db,pubsub}) => {
      const length = db.users.length;

      db.users.splice(0, length);

      return {
        count: length,
      };
    },

    addParticipant: (parent, { data },{db,pubsub}) => {
      const participant = {
        id: nanoid(),
        ...data,
      };

      db.participants.push(participant);
      pubsub.publish("participantAttended", {participantAttended: participant})
      return participant;
    },
    updateParticipant: (parent, { id, data },{db,pubsub}) => {
      const participant_index = db.participants.findIndex(
        (participant) => participant.id == id
      );
      if (participant_index === -1) {
        throw new Error("participant not found");
      }

      const updated_participant = (db.participants[participant_index] = {
        ...db.participants[participant_index],
        ...data,
      });

      return updated_participant;
    },
    deleteParticipant: (parent, { id },{db,pubsub}) => {
      const participant_index = db.participants.findIndex(
        (participant) => participant.id == id
      );
      if (participant_index === -1) {
        throw new Error("participant not found");
      }

      const deleted_participant = db.participants[participant_index];

      db.participants.splice(participant_index, 1);

      return deleted_participant;
    },
    deleteAllParticipants: (_,__,{db,pubsub}) => {
      const length = db.participants.length;

      db.participants.splice(0, length);

      return {
        count: length,
      };
    },

    addLocation: (parent, { data },{db,pubsub}) => {
      const location = {
        id: nanoid(),
        ...data,
      };

      db.locations.push(location);

      return location;
    },
    updateLocation: (parent, { id, data },{db,pubsub}) => {
      const location_index = db.locations.findIndex(
        (location) => location.id == id
      );
      if (location_index === -1) {
        throw new Error("location not found");
      }

      const updated_location = (db.locations[location_index] = {
        ...db.locations[location_index],
        ...data,
      });

      return updated_location;
    },
    deleteLocation: (parent, { id },{db,pubsub}) => {
      const location_index = db.locations.findIndex(
        (location) => location.id == id
      );
      if (location_index === -1) {
        throw new Error("location not found");
      }

      const deleted_location = db.locations[location_index];

      db.locations.splice(location_index, 1);

      return deleted_location;
    },
    deleteAllLocations: (_,__,{db,pubsub}) => {
      const length = db.locations.length;

      db.locations.splice(0, length);

      return {
        count: length,
      };
    },

    addEvent: (parent, { data },{db,pubsub}) => {
      const event = {
        id: nanoid(),
        ...data,
      };

      db.events.push(event);
      pubsub.publish("eventCreated", {eventCreated: event})
      return event;
    },
    updateEvent: (parent, { id, data },{db,pubsub}) => {
      const event_index = db.events.findIndex((event) => event.id == id);
      if (event_index === -1) {
        throw new Error("event not found");
      }

      const updated_event = (db.events[event_index] = {
        ...db.events[event_index],
        ...data,
      });

      return updated_event;
    },
    deleteEvent: (parent, { id },{db,pubsub}) => {
      const event_index = db.events.findIndex((event) => event.id == id);
      if (event_index === -1) {
        throw new Error("event not found");
      }

      const deleted_event = db.events[event_index];

      db.events.splice(event_index, 1);

      return deleted_event;
    },
    deleteAllEvents: (_,__,{db,pubsub}) => {
      const length = db.events.length;

      db.events.splice(0, length);

      return {
        count: length,
      };
    },
  }