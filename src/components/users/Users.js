import User from './User'


const Users = ({users}) => {
  return (
    <div className="card card-body p-lg-5">
      <div className="d-grid" style={{gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem"}}>
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
      </div>
    </div>
  )
}

export default Users
