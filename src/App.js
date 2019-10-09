import './App.scss';

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingContainer from './containers/LandingContainer';

export default class App extends Component {



  render() {
    return (
      <Router>

        <Navbar />

        <Route exact path="/">
          <LandingContainer />
        </Route>

      </Router>
    )
  }
}

