import 'bootswatch/dist/flatly/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Navbar from './components/layout/Navbar'
import UserDetails from './components/users/UserDetails'
import {useState, useEffect} from 'react'


const App = () => {

  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  const getUser = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    setUser(data)
  }

  const getRepos = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const data = await res.json()
    setRepos(data)
  }


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Home /> */}
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} /> 
         
          <Route exact path='/user/:login' render={props => (
            <UserDetails { ... props} getUser={getUser} user={user} getRepos={getRepos} repos={repos}  />
          )} />


          <Route component={NotFound} /> 
        </Switch>

      </Router>
    </>
  );
}

export default App;
