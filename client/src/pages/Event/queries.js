import { gql } from "@apollo/client";


const eventDetailFragment = gql`
  fragment EventDetailFragment on Event{
    id
    title
    desc
    date
    location{
        name
    }
    user{
        username
    }
  }
`

export const GET_EVENT= gql`
query getEvent($id:ID!){
  event(id:$id){
    ...EventDetailFragment
  }
}
${eventDetailFragment}
`


const participantsFragment = gql`
  fragment ParticipantsFragment on Participant{
    id,
        user{
            username
        }
  }

`




export const GET_PARTICIPANTS = gql`
    query getParticipants($id:ID!){
      event(id:$id){
          participants{
            ...ParticipantsFragment
          }
      }
      
    }
    ${participantsFragment}
`



export const PARTICIPANT_SUBSCRIPTION =gql`
  subscription{
      participantAttended{
      ...ParticipantsFragment
    }
  }
  ${participantsFragment}

`