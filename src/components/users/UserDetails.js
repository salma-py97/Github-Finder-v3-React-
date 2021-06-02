import {useEffect, useState} from 'react'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'



const UserDetails = ({user, getUser, match, repos, getRepos}) => {

  const {name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company} = user;

  // const [repos, setRepos] = useState([])


  useEffect(() => {
    getUser(match.params.login)
    getRepos(match.params.login)
  }, [])

  return (
    <div className="container">
      <Link to="/" role="button" className="px-4 mt-4 btn btn-lg btn-info"><BsArrowLeft className="fs-4 me-3 mb-1" /> Go Back</Link>
      <div className="card card-body mt-5">
        <div className="row d-flex justify-content-around">
          <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
            <img src={avatar_url} className="d-block img-fluid mb-3" alt="profile pic" style={{width: "150px"}} />
            <h3>{name}</h3>

            {location && <p>Location: {location}</p>}
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-start mt-3 align-items-start">
            <ul>
              {bio && <li><strong>Bio : </strong>{bio}</li>}
              {blog && <li><strong>Blog : </strong><a href={blog}>{blog}</a></li>}
              {company && <li><strong>Company : </strong> {company}</li>}
              {login && <li><strong>Login : </strong>{login}</li>}
              {html_url && <li><strong>Github Profile : </strong><a href={html_url}>{html_url}</a></li>}
              <li><strong>Hireable :</strong> {hireable ? <AiOutlineCheck className="text-success" /> : <AiOutlineClose className="text-danger" />}</li>
            </ul>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-3 my-1 d-flex justify-content-center">
                <span className="badge bg-secondary"><strong>Followers : </strong>{followers}</span>
              </div>
              <div className="col-sm-3 my-1 d-flex justify-content-center">
                <span className="badge bg-success"><strong>Following : </strong>{following}</span>
              </div>
              <div className="col-sm-3 my-1 d-flex justify-content-center">
                <span className="badge bg-warning"><strong>Public Repos : </strong>{public_repos}</span>
              </div>
              <div className="col-sm-3 my-1 d-flex justify-content-center">
                <span className="badge bg-info"><strong>Public Gists : </strong>{public_gists}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />

    </div>
  )
}

export default UserDetails
