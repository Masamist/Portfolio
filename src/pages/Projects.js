import { Link } from 'react-router-dom'

// style
import './Projects.css'

// images

import kpc from '../assets/kpc.png'
import getitpython from '../assets/get_it_python.png'
import happychick from '../assets/happy_chick.png'


export default function Projects() {
  return (
    <section className='project'>
      <div className='container'>
          <div>
            <h1 className='project-title'>Projects</h1>
          </div>
          <div className='home-project-txt-container'>
            <p className='home-project-txt'>I have learned software development skills such as Agile projects, 
              many programming languages, coding, how to approach and resolve issues. 
              These are some of my projects that I completed while studying Software Development at Whitecliffe. </p>
          </div>
          
          <div className='home-project-container'>
            <div>
            <img src={kpc} alt='Kauri Point Construction' />
              <h3>Kauri Point Construction</h3>
              <p>Group work for the final project in the Software Development course. 
                The goal was to create a construction website including a project management app. 
                The website is deployed and used by the client.</p>
            </div>
            <div>
              <img src={getitpython} alt='Get IT Python' />
              <h3>Get IT Python</h3>
              <p>Group work for the final project in the Software Development course. 
                The goal was to create a construction website including a project management app. 
                The website is deployed and used by the client.</p>
            </div>
            <div>
              <img src={happychick} alt='Happy Chick Game' />
              <h3>Happy Chick</h3>
              <p>Group work for the final project in the Software Development course. 
                The goal was to create a construction website including a project management app. 
                The website is deployed and used by the client.</p>
            </div>
          </div>
        <button className='btn-yellow' id='home-project-btn'><Link to="/products">More Projects</Link></button>
      </div>
    </section>
  )
}
