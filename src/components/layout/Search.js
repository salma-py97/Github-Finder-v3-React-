import {useState, useContext} from 'react'
import GithubContext from '../context/githubContext'

const Search = () => {
  // initialize context
  const githubContext = useContext(GithubContext) 
  // Destructuring
  const {searchUsers, showAlert} = githubContext

  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if (text===""){
      showAlert() 
    }
    else {
      searchUsers(text)
      // clear Form
      setText("")
    }
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
      <form className='mb-3' onSubmit={onSubmit} >
        <div className="d-flex" >
          <input type="text" className="form-control  border-end-0" placeholder="Enter a username..." onChange={onChange} value={text} />
          <button type="submit" className="btn btn-primary border-start-0 px-5" style={buttonStyle} >Search</button>
        </div>

      </form>

  )
}


const buttonStyle = {
  borderBottomLeftRadius: "0",
  borderTopLeftRadius: "0"
}

export default Search
