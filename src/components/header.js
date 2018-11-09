import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <Link to="/">server</Link>
      <br/>
      <Link to="/login">Login</Link>
    </div>
  )
}
