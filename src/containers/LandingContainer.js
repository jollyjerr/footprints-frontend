import React from 'react'

import '../styles/landing-container.scss'
import { connect } from "react-redux";
import Footprint from '../components/Footprint';

function LandingContainer() {
    return (
        <div className="landing-container" >
            <h1>footprint</h1>
            <h2>Fight climate change with a personal assistant.</h2>
            <p>INFO COMP.</p>
            <p>SOME OTHER COMP.</p>
            {/* <Footprint/> */}
        </div>
    )
}

export default connect(null, null)(LandingContainer)
