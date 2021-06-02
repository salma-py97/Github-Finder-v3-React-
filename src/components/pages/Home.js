import Search from '../layout/Search'
import Alert from '../layout/Alert'
import Spinner from '../layout/Spinner'
import Users from '../users/Users'
import {useEffect, useState} from 'react'



const Home = () => {
  const [alert, setAlert] = useState(false)
  const [loading, setLoading] = useState(false)
 
  const [users, setUsers] = useState([])
  
  useEffect(()=> {
    const fetchUsers = async () => {
      const dataFomServer = await getUsers();
      setUsers(dataFomServer)
      setLoading(false)
      console.log(dataFomServer)
    }
    fetchUsers()
  }, [])

  const getUsers = async () => {
    setLoading(true)
    const res = await fetch("https://api.github.com/users")
    const data = await res.json()
    return data
  }



  return (
    <div className="container mt-5">
      {alert && <Alert /> }
      <Search />
      {
      loading 
      ? 
      <Spinner /> 
      : 
      <Users users={users} />
      }
    </div>
  )
}

export default Home
