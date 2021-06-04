import {useContext} from 'react'
import GithubContext from '../context/githubContext'

const Clear = () => {

  // Initialize context
  const githubContext = useContext(GithubContext)
  // Destructuring
  const {clearUsers} = githubContext

  const onClick = () => {
    clearUsers()
  }

  return (
    <div className="d-grid">
      <button className="mb-5 btn btn-secondary btn-block" onClick={onClick} >CLEAR USERS</button>
  </div>
  )
}

export default Clear
