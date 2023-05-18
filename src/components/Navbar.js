import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span>Masami Stonebridge</span>
      <ul>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  )
}
