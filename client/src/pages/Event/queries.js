import { gql } from "@apollo/client";

export const GET_EVENT= gql`
query getEvent($id:ID!){
  event(id:$id){
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
    participants{
        user{
            username
        }
    }
  }
}
`