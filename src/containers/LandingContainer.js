import React from 'react'

import '../styles/landing-container.scss'
import LoginContainer from './LoginContainer'
import { connect } from "react-redux";

function LandingContainer(props) {
    return (
        <div className="landing-container" >
            <LoginContainer {...props} />
            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch({ type: "LOGIN" })
  };
};

export default connect(null, mapDispatchToProps)(LandingContainer)
