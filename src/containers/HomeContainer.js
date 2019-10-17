import React from 'react'
import {connect} from 'react-redux'

function HomeContainer(props) {
    return (
        <div>
            Home
        </div>
    )
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, null)(HomeContainer)
