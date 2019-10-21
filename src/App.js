import './App.scss'

import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingContainer from './containers/LandingContainer'
import SignUpContainer from './containers/SignUpContainer'
import NoMatch from './components/NoMatch'

import { footprintActions } from "./actions";

function App(props) {
  useEffect(() => { //link this visitors session to a unique bot instance
    props.setToken() 
  })
  
  return (
      <Router>

      <Navbar />

      <Switch>

        <Route exact path="/">
          <LandingContainer/>
        </Route>

        <Route exact path ="/signup">
          <SignUpContainer />
        </Route>

         <Route component={NoMatch} />
      </Switch>

      </Router>
  )
}

const mapDispatchToProps = dispatch => ({
  setToken: () => footprintActions.setToken(dispatch)
});

export default connect(null, mapDispatchToProps)(App);

