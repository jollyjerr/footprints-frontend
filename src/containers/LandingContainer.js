import React from 'react'
import {Link} from 'react-router-dom'

import '../styles/landing-container.scss'
import { connect } from "react-redux";


function LandingContainer() {
    return (
        <div className="landing-container" >
            <h1>footprint</h1>
            <h2>Fight climate change with a personal assistant.</h2>
            <p>INFO COMP.</p>
            <p>SOME OTHER COMP.</p>
            <div className="landing-chat-button" >
                <Link to="/chat" >
                    <button className="chat-button" >Chat!</button> 
                </Link>
            </div>
            <p>Info on where footprint can be used</p>
        </div>
    )
}

export default connect(null, null)(LandingContainer)
