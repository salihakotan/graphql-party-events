import React from "react";
import Title from "antd/es/typography/Title";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "./queries";
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
  const { loading, error, data } = useQuery(GET_EVENTS);

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
