import React, { useEffect } from "react";
import Title from "antd/es/typography/Title";
import { useQuery } from "@apollo/client";
import { EVENTS_SUBSCRIPTION, GET_EVENTS } from "./queries";
import Loading from "../../components/Loading";

import { List } from "antd";
import { Link } from "react-router-dom";




const truncateDescription = (desc) => {
  if (desc.length > 130) {
    return desc.substring(0, 130) + '...';
  }
  return desc;
};

function Home() {
  const {called, loading, error, data,subscribeToMore } = useQuery(GET_EVENTS);


    useEffect(()=> {
      if(!loading && called) {
        subscribeToMore({
          document:EVENTS_SUBSCRIPTION,
          updateQuery: (prev, {subscriptionData}) => {
            if(!subscriptionData.data) return prev

            return {
              events:[
                subscriptionData.data.eventCreated,
                ...prev.events
              ]
            }
          }
        })
      }
    },[subscribeToMore,called,loading])



  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    (<div className="">
      <Title level={1}>Events</Title>
      <List
        itemLayout="horizontal"
        dataSource={data.events}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`/event/${item.id}`}>{item.title}</Link>}
              description={<Link to={`/event/${item.id}`}>{truncateDescription(item.desc)}</Link>}
            />
            <div>{item.date}</div>
          </List.Item>
        )}
      />
    </div>)
  );
}

export default Home;
