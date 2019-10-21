import React from 'react'
import {connect} from 'react-redux'
import Login from '../components/Login'

import '../styles/signup-container.scss'

function SignUpContainer(props) {
    return (
        <div className="signup-container" >
          
        </div>
    )
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, null)(SignUpContainer)
