import {Link} from 'react-router-dom'


const User = ({user}) => {

  const {login, avatar_url} = user



  return (
    <div className="card card-body text-center d-flex justify-content-center align-items-center">
      <img src={avatar_url} alt="img" className="img-fluid d-block m-auto rounded-circle mb-2" style={{width: '100px'}} /> 
      <p>{login}</p>
      <Link to={`/user/${login}`} className="btn btn-info btn-sm px-4">More</Link>
      
    </div>
  )
}

export default User
