// 1- Import useReducer
// 2- Import GithubContext
// 3- Import GithubReducer
// 4- Import types

import {useReducer, useEffect} from 'react'

import GithubContext from './githubContext'
import GithubReducer from './githubReducer'


import {SEARCH_USERS, CLEAR_USERS, GET_USERS, GET_REPOS, GET_USER, SET_LOADING, SET_CLEAR, SET_CLEAR_TRUE, SET_ALERT, SET_ALERT_FALSE} from './types'

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

const GithubState = props => {

  // initial state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    repo:{},
    loading: false,
    clear: true,
    alert: false
  }

  // linking githubReducer with initial State
  const [state, dispatch] = useReducer(GithubReducer, initialState)


  // All Actions/Functions
  useEffect(()=> {
    const fetchUsers = async () => {
      const dataFomServer = await getUsers();
      dispatch({type: GET_USERS, payload: dataFomServer})

    }
    fetchUsers()
  }, [])
    
  const getUsers = async () => {
    setLoading()
    const res = await fetch(`https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
    const data = await res.json()
    return data
  }

  const searchUsers = async (query) => {
    setLoading()
    const res = await fetch(`https:api.github.com/search/users?q=${query}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
    const data = await res.json()

    dispatch({type: SEARCH_USERS, payload: data.items})
    setClearTrue()
  }
  
  const getUser = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}`)

    const data = await res.json()
    dispatch({type: GET_USER, payload: data})
  }

  const getRepos = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const data = await res.json()
    dispatch({type: GET_REPOS, payload: data})
  }
  

  const clearUsers = () => {
    dispatch({type: CLEAR_USERS})
    setClear()
  }

  const showAlert = () => {
    dispatch({type: SET_ALERT})
    setTimeout(() => {dispatch({type: SET_ALERT_FALSE})}, 1500)
  }


  const setLoading = () => {
    dispatch({type: SET_LOADING})
  }
  const setClear = () => {
    dispatch({type: SET_CLEAR})
  }
  const setClearTrue = () => {
    dispatch({type: SET_CLEAR_TRUE})
  }
 
 
  return (
    <GithubContext.Provider
    value = {{
      users: state.users,
      user: state.user,
      repos: state.repos,
      repo: state.repo,
      clear: state.clear,
      loading: state.loading,
      alert: state.alert,
      searchUsers,
      // getUsers,
      getUser,
      getRepos,
      clearUsers,
      setLoading,
      setClear,
      setClearTrue,
      showAlert,
    }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
