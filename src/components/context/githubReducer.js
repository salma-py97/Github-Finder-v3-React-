import {SEARCH_USERS, CLEAR_USERS, GET_USERS, GET_REPOS, GET_USER, SET_LOADING, SET_CLEAR, SET_CLEAR_TRUE, SET_ALERT, SET_ALERT_FALSE} from './types'


export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
      case SEARCH_USERS:
        return {
            ...state, 
            users: action.payload,
            loading: false
        }
      case GET_USER:
        return {
            ...state,
            user: action.payload,
            loading: false
        }
      case GET_REPOS:
        return {
          ...state,
          repos: action.payload,
          loading: false
        }
      case CLEAR_USERS:
        return {
          ...state,
          users: [],
          loading: false
        }
      
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_CLEAR:
      return {
        ...state,
        clear: false
      }
    case SET_CLEAR_TRUE:
      return {
        ...state,
        clear: true
      }
    case SET_ALERT:
      return {
        ...state,
        alert: true
      }
    case SET_ALERT_FALSE:
      return {
        ...state,
        alert: false
      }
    default :
      return state
  }
}
