
const Alert = () => {

 return (
    <div class="alert alert-dismissible alert-danger">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <p className="m-0" >Oops, You entered a username that doesn't exist. <strong>Try again!</strong> </p>
    </div>
  )
}

export default Alert
