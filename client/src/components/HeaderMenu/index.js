import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Menu } from 'antd';


const items = [
  {
    key: 'events',
    path:"/",
    label: (
      <Link to="/">Events</Link>
    ),
  },
  {
    key: 'newEvent',
    path:"/newEvent",
    label: (
      <Link to="/newEvent">New Event</Link>
    ),
  }
];
function HeaderMenu() {


  const location = useLocation();

  console.log("location", location)

  const getAssociatedPaths = () => {
 

    const active = items.find((item)=> item.path === location.pathname)

    return active.key
  }



  return (
    <Menu theme='dark' selectedKeys={getAssociatedPaths()} mode="horizontal" items={items}
 />
  )
}

export default HeaderMenu