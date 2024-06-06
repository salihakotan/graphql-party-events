# GraphQL Party Events Server :star:

This project assignment has been prepared for the 'Patika.dev' GraphQL course. A sample GraphQL server where users can view events, event locations, and event participants.

---

![preview](prev.png)

---

## Query

```graphql
query getAllUsers {
  users {
    id
    username
    email
    events {
      id
      title
      user_id
    }
  }
}

query getUser {
  user(id: 1) {
    id
    username
    email
    events {
      id
      title
      user_id
    }
  }
}

query getAllEvents {
  events {
    id
    title
    desc
    date
    from
    to
    location_id
    user_id
    user {
      id
      username
      email
    }
    location {
      id
      name
    }
    participants {
      id
      user_id
      user {
        id
        username
      }
    }
  }
}

query getEvent {
  event(id: 8) {
    id
    title
    desc
    date
    from
    to
    location_id
    user_id
    user {
      id
      username
    }
    location {
      id
      name
    }
    participants {
      id
      user_id
      user {
        id
        username
      }
    }
  }
}

query getAllLocations {
  locations {
    id
    name
    desc
    lat
    lng
  }
}

query getLocation {
  location(id: 2) {
    id
    name
    desc
    lat
    lng
  }
}

query getAllParticipants {
  participants {
    id
    user_id
    event_id
  }
}

query getParticipant {
  participant(id: 2) {
    id
    user_id
    event_id
    user {
      id
      username
    }
  }
}

```