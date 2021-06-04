import 'bootswatch/dist/flatly/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Navbar from './components/layout/Navbar'
import UserDetails from './components/users/UserDetails'
import {useState} from 'react'

import GithubState from './components/context/GithubState'


const App = () => {

  return (
    <GithubState>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" exact component={About} /> 
         
          <Route exact path='/user/:login' component={UserDetails}  />



          <Route component={NotFound} /> 
        </Switch>

      </Router>
    </GithubState>
  );
}

export default App;
