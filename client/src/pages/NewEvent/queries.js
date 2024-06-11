import { gql } from "@apollo/client";

export const NEW_EVENT_MUTATION = gql`

mutation addEvent($data:AddEventInput!){
  addEvent(data:$data) {
    id,
    title,
    location_id,
    user_id,
    user{id,username}
    location{id,name}
  }
}

`

export const GET_LOCATIONS= gql`

    query getAllLocations{
        locations{
            id,
            name
        }
       
    }

`


export const GET_USERS= gql`
    query getAllUsers{
        users{
            id,
            username
        }
    }
`