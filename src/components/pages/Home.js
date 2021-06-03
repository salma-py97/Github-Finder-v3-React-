import Search from '../layout/Search'
import Alert from '../layout/Alert'
import Spinner from '../layout/Spinner'
import Clear from '../layout/Clear'
import Users from '../users/Users'
import {useEffect, useState} from 'react'



const Home = () => {
  const [alert, setAlert] = useState(false)
  const [loading, setLoading] = useState(false)
  const [clear, setClear] = useState(true)
  const [users, setUsers] = useState([])
  
  useEffect(()=> {
    const fetchUsers = async () => {
      const dataFomServer = await getUsers();
      setUsers(dataFomServer)
      setLoading(false)
    }
    fetchUsers()
  }, [])

  const getUsers = async () => {
    setLoading(true)
    const res = await fetch("https://api.github.com/users?client_id=f37d067fa15383561be6&client_secret=3ec659087b75425ab04b2f04e4e640f61397519a")
    const data = await res.json()
    return data
  }

  const searchUsers = async (query) => {
    setLoading(true)
    const res = await fetch(`https:api.github.com/search/users?q=${query}&client_id=f37d067fa15383561be6&client_secret=3ec659087b75425ab04b2f04e4e640f61397519a`)
    const data = await res.json()
    setUsers(data.items)
    setLoading(false)
    setClear(true)
  }

  const clearUsers = () => {
    setUsers([])
    setClear(false)
  }

  const showAlert = () => {
    setAlert(true)
    setTimeout(() => setAlert(false), 1500)
  }

  return (
    <div className="container mt-5">
      {alert && <Alert /> }
      <Search searchUsers={searchUsers} showAlert={showAlert}  />
      {clear && <Clear clearUsers={clearUsers} />}
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
