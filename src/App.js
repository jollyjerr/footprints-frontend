import './App.scss'

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingContainer from './containers/LandingContainer'
import HomeContainer from './containers/HomeContainer'
import NoMatch from './components/NoMatch'



export default class App extends Component {
  BACKED_URL = "http://localhost:5000/api"
  state = {
    user: {},
  }

  isloggedIn = () => {
    if(Object.keys(this.state.user).length !== 0) {
      return true
    }
    let jwt = localStorage.getItem("footprintsJWT")
    return jwt ? true : false
  }

  logIn = (formData) => {
    fetch(`${this.BACKEND_URL}/auth/login`, {
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        username: formData.username,
        password: formData.password
      })
    })
    .catch(alert)
    .then(resp => resp.json())
    .then(userData => {
      this.setState({
        user: userData
      })
    })
    .catch(alert)
  }

  render() {
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
}

