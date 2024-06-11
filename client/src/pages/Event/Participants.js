import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useQuery } from "@apollo/client";
import { GET_PARTICIPANTS, PARTICIPANT_SUBSCRIPTION } from "./queries";
import Loading from "../../components/Loading";

function Participants({ event_id }) {
  const  { called, loading, error, data, subscribeToMore } = useQuery(
    GET_PARTICIPANTS,
    {
      variables: {
        id: event_id,
      },
    }
  );


  useEffect(() => {
    if (!loading && called) {
      subscribeToMore({
        document: PARTICIPANT_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;

          return {
            event: {
              ...prev.event,
              participants: [
                subscriptionData.data.participantAttended,
                ...prev.event.participants,
              ],
            },
          };
        },
      });
    }
  },[subscribeToMore,called,loading]);

  

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (

    

    <div>
    
      {!loading && data && (
        <ul>
          {data.event.participants.map((participant, index) => (
            <li className={styles.description} key={index}>
              {participant.user.username}
            </li>
          ))}
        </ul>
      )}
    </div>

    // <div>

    // </div>
  );
}

export default Participants;
