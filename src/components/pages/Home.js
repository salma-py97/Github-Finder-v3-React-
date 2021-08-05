import Search from '../layout/Search'
import Alert from '../layout/Alert'
import Spinner from '../layout/Spinner'
import Clear from '../layout/Clear'
import Users from '../users/Users'
import {useContext} from 'react'
import GithubContext from '../context/githubContext'


const Home = () => {
  // init context
  const githubContext = useContext(GithubContext)
  // destructuring
  const {loading, clear, alert} = githubContext


  return (
    <div className="container mt-5">
      {alert && <Alert /> }
      <Search />
      {clear && <Clear  />}
      {loading ? <Spinner /> : <Users /> }
    </div>
  )
}

export default Home
