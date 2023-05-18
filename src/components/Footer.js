import { Link } from 'react-router-dom'

// styles
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <span>Masami Stonebridge</span>
      <ul>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <div className='footer-copyright'>
        2023 Masami Stonebridge Portfolio, All Rights Reserved
      </div>
    </div>
  )
}
