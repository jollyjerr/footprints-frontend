import React from 'react'

import '../styles/landing-container.scss'
import { connect } from "react-redux";
import Footprint from '../components/Footprint';

function LandingContainer() {
    return (
        <div className="landing-container" >
            <Footprint/>
        </div>
    )
}

export default connect(null, null)(LandingContainer)
