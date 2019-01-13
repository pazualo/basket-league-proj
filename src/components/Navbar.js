import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../github.svg'
export default function Navbar() {
  return (
    <div className="container navbar">
      <Link to="/">Home</Link>
      <nav className="nav-links">
        <Link to="/players">Players</Link>
        <Link to="/teams">Teams</Link>
        <a
          href={'https://github.com/pazualo'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="20px" src={Img} alt="GitHub Logo" />
        </a>
      </nav>
    </div>
  )
}
