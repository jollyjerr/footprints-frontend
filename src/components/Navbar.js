import React from 'react'
import {Link} from 'react-router-dom'

import '../styles/Navbar.scss'
import logo from '../assets/footprint.png'

export default function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="footprint!" />
        </Link>
        <button>SignUp!</button>
      </nav>
    );
}
