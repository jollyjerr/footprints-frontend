import React from 'react'

import '../styles/landing-container.scss'
import LoginContainer from './LoginContainer'

export default function LandingContainer({logIn}) {
    return (
        <div className="landing-container" >
            <LoginContainer logIn={logIn} />
            
        </div>
    )
}
