import Search from '../layout/Search'
import Alert from '../layout/Alert'
import Spinner from '../layout/Spinner'
import Clear from '../layout/Clear'
import Users from '../users/Users'
import {useContext, useState} from 'react'
import GithubContext from '../context/githubContext'



const Home = () => {
  // init context
  const githubContext = useContext(GithubContext)
  // destructuring
  const {loading, clear} = githubContext

  const [alert, setAlert] = useState(false)
  

  const showAlert = () => {
    setAlert(true)
    setTimeout(() => setAlert(false), 1500)
  }

  return (
    <div className="container mt-5">

      {alert && <Alert /> }

      <Search showAlert={showAlert}  />

      {clear && <Clear  />}

      {
      loading 
      ? 
      <Spinner /> 
      : 
      <Users />
      }

    </div>


    // <div className="container mt-5">
    //   {alert && <Alert /> }
    //   <Search searchUsers={searchUsers} showAlert={showAlert}  />
    //   {clear && <Clear clearUsers={clearUsers} />}
    //   {
    //   loading 
    //   ? 
    //   <Spinner /> 
    //   : 
    //   <Users users={users} />
    //   }
    // </div>


  )
}

export default Home
