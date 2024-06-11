import { gql } from "@apollo/client";


const eventsFragment = gql`

  fragment EventsFragment on Event{
    id
      title
      desc
      date
  }


`


export const GET_EVENTS = gql`
  query getAllEvents {
    events {
      ...EventsFragment
    }
  }
  ${eventsFragment}
`;

export const EVENTS_SUBSCRIPTION = gql`
  subscription {
    eventCreated {
      ...EventsFragment
    }
  }
  ${eventsFragment}
`;
