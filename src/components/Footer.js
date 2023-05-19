import { Link } from 'react-router-dom'

// styles
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div class='footer-logo-container'>
        <span className='footer-logo'>Masami<br/>Stonebridge</span>
      </div>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
      
      <div className='footer-copyright'>
        <p>
          2023 Masami Stonebridge Portfolio, All Rights Reserved
        </p>
      </div>
    </div>
  )
}
