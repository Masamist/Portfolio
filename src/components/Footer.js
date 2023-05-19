import { Link } from 'react-router-dom'

// styles&images
import './Footer.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

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
        <img src={github} alt='GitHub' />
        <img src={linkedin} alt='LinkedIn' />
        <p>
          2023 Masami Stonebridge Portfolio, All Rights Reserved
        </p>
      </div>
    </div>
  )
}
