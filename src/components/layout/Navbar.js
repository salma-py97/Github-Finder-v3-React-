import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">GITHUB FINDER</Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" style={{outline: "none", border: "none", boxShadow:"none"}} >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <Link className="nav-link" to="/">Home
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
