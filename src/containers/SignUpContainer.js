import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Login from '../components/Login'

import '../styles/signup-container.scss'
import NewUser from '../components/NewUser'
import AddVehicle from '../components/AddVehicle'
import AddHouse from '../components/AddHouse'

function SignUpContainer(props) {
  const [waterfallSignup, incrementWaterfallSignup] = useState(1)

  const next = () => {
    incrementWaterfallSignup(waterfallSignup + 1)
  }

  const renderStep = () => {
    switch(waterfallSignup){
      case 1:
        return <NewUser next={next} />
      case 2:
        return <AddHouse next={next} />
      case 3:
        return <AddVehicle next={next} />
      case 4:
        return <Redirect to="/chat" />
      default:
        return <Redirect to="/" />
    }
  }

    return (
        <div className="signup-container" >
          {renderStep()}
        </div>
    )
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, null)(SignUpContainer)
