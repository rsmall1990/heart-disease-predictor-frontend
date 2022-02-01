import { Link } from "react-router-dom"

function Header(props) {
  return (
    <div className="nav">
      <div className="nav-item"><Link to="/">Home</Link></div>
      <div className="nav-item"><Link to="/new">New</Link></div>
      <div className="nav-item"><Link to="/about">About</Link></div>
    </div>
  )
}

export default Header