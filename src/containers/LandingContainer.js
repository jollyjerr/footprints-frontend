import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

import '../styles/landing-container.scss'
import slack from '../assets/slack.png'
import messenger from '../assets/messenger.png'
import kik from '../assets/kik.png'


function LandingContainer() {
    return (
        <div className="landing-container" >
            <h1>footprint</h1>
            <h2>Fight climate change with a personal assistant.</h2>
            <div className="landing-chat-button" >
                <Link to="/chat" >
                    <button className="chat-button" >Chat!</button> 
                </Link>
            </div>
            <footer className="footer" >
                <div className="m-logo" >
                    <img src={slack} alt="slack"/>
                </div>
                <div className="m-logo" >
                    <img src={messenger} alt="messenger" />
                </div>
                <div className="m-logo" >
                    <img src={kik} alt="kik" />
                </div>
            </footer>
        </div>
    )
}

export default connect(null, null)(LandingContainer)
