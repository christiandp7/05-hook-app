import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// components
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import Navbar from './Navbar'


const AppRouter = () => {
  return (
    <Router>

        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={ HomeScreen } />
            <Route path="/about" component={ AboutScreen } />
            <Route path="/login" component={ LoginScreen } />
            <Route path="/404" component={HomeScreen} />
            <Redirect to="/404" />
          </Switch>
        </div>
        
    </Router>
  )
}

export default AppRouter
