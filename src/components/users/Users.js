import User from './User'

import {useContext} from 'react'
import GithubContext from '../context/githubContext'


const Users = () => {

  // initialize githubContext
  const githubContext = useContext(GithubContext)

  // Destructuring
  const {users} = githubContext


  return (
    <div className="card card-body p-lg-5 mx-lg-5 border-0">
      <div className="d-grid" style={{gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem"}}>
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
      </div>
    </div>
  )
}

export default Users
