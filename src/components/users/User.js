import {Link} from 'react-router-dom'

// import {useContext} from 'react'
// import GithubContext from '../context/githubContext'


const User = ({user}) => {
  // // initalize context
  // const githubContext = useContext(GithubContext)
  // // Destructuring
  // const {user} = githubContext

  const {login, avatar_url} = user

  console.log(login)



  return (
    <div className="card card-body text-center d-flex justify-content-center align-items-center">
      <img src={avatar_url} alt="img" className="img-fluid d-block m-auto rounded-circle mb-2" style={{width: '100px'}} /> 
      <p>{login}</p>
      <Link to={`/user/${login}`} className="btn btn-info btn-sm px-4">More</Link>
      
    </div>
  )
}

export default User
