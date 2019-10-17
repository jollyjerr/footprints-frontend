import './App.scss'

import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingContainer from './containers/LandingContainer'
import HomeContainer from './containers/HomeContainer'
import NoMatch from './components/NoMatch'

function App(props) {
  BACKED_URL = "http://localhost:5000/api"

  return (
    <Router>

      <Navbar />

      <Switch>

        <Route exact path="/">
          {this.isloggedIn() ? <Redirect to="/home" /> : <LandingContainer login={this.logIn} />}
        </Route>

        <Route exact path ="/home">
          <HomeContainer />
        </Route>

         <Route component={NoMatch} />
      </Switch>

    </Router>
  )
}

const logIn = formData => {
  fetch(`${this.BACKEND_URL}/auth/login`, {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: formData.username,
      password: formData.password
    })
  })
    .catch(alert)
    .then(resp => resp.json())
    .then(userData => {
      this.setState({
        user: userData
      });
    })
    .catch(alert);
};

const isloggedIn = () => {
  if (Object.keys(this.state.user).length !== 0) {
    return true;
  }
  let jwt = localStorage.getItem("footprintsJWT");
  return jwt ? true : false;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

