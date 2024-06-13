import React, { useEffect } from "react";
import styles from "./styles.module.css"
import { GET_LOCATIONS, GET_USERS, NEW_EVENT_MUTATION } from "./queries";
import Title from "antd/es/typography/Title";
import { useMutation, useQuery } from "@apollo/client";
import { Button, DatePicker, Form, Input, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";

function NewEvent() {


  const [saveEvent, { loading  }] = useMutation(NEW_EVENT_MUTATION);

  const {loading:usersLoading,data:usersData} = useQuery(GET_USERS)

  const {loading:locationsLoading,data:locationsData} = useQuery(GET_LOCATIONS)

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);

    try {
        saveEvent({
        variables: {
          data:{
            ...values,
            date:values["date"].format("YYYY-MM-DD")
          }
        },
      });

      message.success("Event added", 4);
      navigate("/");
    } catch (error) {
      message.error("Event not added", 4);
      console.log(error.message)
    }
  };


  return (
    <div>
      <Title level={1}>New Event</Title>

      <Form onFinish={onFinish}>
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter a title",
            },
          ]}
        >
          <Input disabled={loading} placeholder="Enter title" />
        </Form.Item>
        <Form.Item
          name="desc"
          rules={[
            {
              required: true,
              message: "Please enter a description",
            },
          ]}
        >
          <TextArea disabled={loading}  placeholder="Enter description" />
        </Form.Item>
        <Form.Item
          name="date"
          rules={[
            {
              required: true,
              message: "Please select a date",
            },
          ]}
        >
          <DatePicker disabled={loading}  placeholder="Select date" />
        </Form.Item>
        <Form.Item
          name="location"
          rules={[
            {
              required: true,
              message: "Please select a location",
            },
          ]}
        >
          <Select loading={locationsLoading} disabled={loading}  placeholder="Select a location">
            {
                locationsData && locationsData.locations.map((location)=> <Select.Option key={location.id} value={location.id}>{location.name}</Select.Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item
          name="user"
          rules={[
            {
              required: true,
              message: "Please select a user",
            },
          ]}
        >
          <Select loading={usersLoading} disabled={loading}  placeholder="Select an user">
            {
                usersData && usersData.users.map((user)=> <Select.Option key={user.id} value={user.id}>{user.username}</Select.Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item className={styles.formItemButton}>
          <Button loading={loading} htmlType="submit">Add Event</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewEvent;
