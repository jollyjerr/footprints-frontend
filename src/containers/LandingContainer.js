import React from 'react'

import '../styles/landing-container.scss'
import Login from '../components/Login'
import { connect } from "react-redux";

function LandingContainer() {
    return (
        <div className="landing-container" >
            <Login />
            
        </div>
    )
}

export default connect(null, null)(LandingContainer)
