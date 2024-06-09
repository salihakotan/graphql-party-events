import React from "react";
import Title from "antd/es/typography/Title";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "./queries";
import Loading from "../../components/Loading"

function Home() {

    const {loading,error,data} = useQuery(GET_EVENTS)

    if(loading) {
        return <Loading/>
    }

    if(error) {
        return <div>Error: {error.message}</div>
    }

    


  return (
    <div>
      <Title level={1}>Events</Title>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

export default Home;
