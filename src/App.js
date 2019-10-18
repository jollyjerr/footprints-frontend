import './App.scss'

import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingContainer from './containers/LandingContainer'
import HomeContainer from './containers/HomeContainer'
import NoMatch from './components/NoMatch'

import { footprintActions } from "./actions";

function App(props) {
  //link this visitors session to a unique bot instance
  useEffect(() => {
    props.setToken() 
  }, [])
  
  return (
    <Router>

      <Navbar />

      <Switch>

        <Route exact path="/">
          {props.user ? <Redirect to="/home" /> : <LandingContainer {...props} />}
        </Route>

        <Route exact path ="/home">
          <HomeContainer />
        </Route>

         <Route component={NoMatch} />
      </Switch>

    </Router>
  )
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapDispatchToProps = dispatch => ({
  setToken: () => footprintActions.setToken(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

