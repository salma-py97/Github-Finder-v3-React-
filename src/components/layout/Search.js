import {useState} from 'react'
import Alert from '../layout/Alert'


const Search = () => {
  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if (text===""){
      // setAlert(true)
      console.log("ALEEEEEEEEEEEEEEEEEERT")    
    }
    else {
      console.log(`I want ${text}`)
    }
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <form className='mb-5' onSubmit={onSubmit} >
      <div className="d-flex" >
        <input type="text" className="form-control  border-end-0" placeholder="Enter a username..." onChange={onChange} value={text} />
        <button type="submit" className="btn btn-primary border-start-0 px-5">Search</button>
      </div>

    </form>
  )
}

export default Search
