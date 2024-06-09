import React from 'react'
import { Link } from 'react-router-dom'

function HeaderMenu() {
  return (
    <div>


      <Link to="/">Home</Link>
      <Link to="/event/1">Event 1</Link>



    </div>
  )
}

export default HeaderMenu