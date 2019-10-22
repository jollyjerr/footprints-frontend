import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

import '../styles/Navbar.scss'
import logo from '../assets/footprint.png'

function Navbar({user}) {
    return (
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="footprint!" />
        </Link>
        { user ? null : <Link to="/signup" > <button>SignUp!</button> </Link> }
      </nav>
    );
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, null)(Navbar)
