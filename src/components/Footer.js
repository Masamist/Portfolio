import { Link } from 'react-router-dom'

// styles&images
import './Footer.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <div>
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
      </div>
      <div className='footer-copyright'>
        <a href='https://github.com/Masamist?tab=repositories'><img src={github} alt='GitHub' /></a>
        <a href='https://www.linkedin.com/in/masami-stonebridge-a9342a275/'><img src={linkedin} alt='LinkedIn' /></a> 
        <p>
          2023 Masami Stonebridge Portfolio, All Rights Reserved
        </p>
      </div>
      
    </footer>
    
  )
}
