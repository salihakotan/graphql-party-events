import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd';


const items = [
  {
    key: 'events',
    label: (
      <Link to="/">Events</Link>
    ),
  },
  {
    key: 'newEvent',
    label: (
      <Link to="/newEvent">New Event</Link>
    ),
  }
];
function HeaderMenu() {

  const [current, setCurrent] = useState('events');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu theme='dark' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
 />
  )
}

export default HeaderMenu