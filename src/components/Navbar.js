import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

export default function Navbar() {
  return (
      <nav className='navbar'>
        <div class='logo-container'>
          <span className='logo'>Masami<br/>Stonebridge</span>
        </div>
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
        </div>
      
      </nav>

  )
}
