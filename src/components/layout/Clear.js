const Clear = ({clearUsers}) => {

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
