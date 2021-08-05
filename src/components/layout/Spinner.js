import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-start">
      <img src={spinner} style={{width: "300px"}} alt="LOADING" ></img>
    </div>
  )
}

export default Spinner
