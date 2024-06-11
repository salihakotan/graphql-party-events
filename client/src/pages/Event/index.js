import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_EVENT } from "./queries";
import Loading from "../../components/Loading";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";
import Participants from "./Participants";

function Event() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: {
      id,
    },
  });




  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Title level={1}>{data.event.title}</Title>
      <b>{data.event.date}</b>
      <p className={styles.description}>{data.event.desc}</p>
      
      <br />
      <h2>Location: {data.event.location.name}</h2>
      <h2>Event creator: {data.event.user.username}</h2>
      <br/>

      <Title level={2}>Participants</Title>
     <Participants event_id={data.event.id}/>
    </div>
  );
}

export default Event;
