import { Link } from 'react-router-dom'

// style
import './Projects.css'

// images

import kpc from '../assets/projetcs_kpc.png'
import toolsicon from '../assets/tools_kpc.png'

export default function Projects() {
  return (
    <>
      <ProjectTop />
      <Kpc />
      <GetItPython />
    </>
  )
}
function ProjectTop() {
  return (
    <section className='project-top'>
        <h1 className='project-title'>Projects</h1>
        <div className='project-top-container'>
          <div className='project-txt-container'>
            <p className='project-txt'>I would like to introduce my web projects, 
            that I enjoyed creating. On top of the focus on coding 
            I was lucky to solely do the UX design for all the projects. 
            Furthermore, utilising the process and procedures of agile prot, 
            jecacting in the role of scrum master, developer, tester, 
            business analyst, financial staff or even project manager. 
            Each project demonstrates my achievements, growing skills, 
            and opportunities for further growth.</p>
          </div>
        </div> 
    </section>
  )
}

function Kpc() {
  return (
    <section className='project-kpc'>
      <div className='container'>
        <div className='project-img-container'>
          <img src={kpc} alt='Kauri Point Construction' />
          <h3 className='sub-title'>Web Software Project</h3>
          <h1 className='project-kpc-title'>Kauri Point Construction</h1>
          <p>This project is the final project of the Software Development Course. 
            It was group work and we had an actual client, Simon, 
            who started  his own construction company a few years ago in Auckland. 
            The request was to create a project management app and also 
            a new website. It was a great opportunity to work with a real 
            client and an awesome showcase for our final project.</p>
          <div className='tool-icons-container'>
            <img className='tool-icons' src={toolsicon} alt='Tool icons' />
          </div>
          
          <div className='button-container'>
            <div>
              <button className='kpc-button'>Code on GitHub</button>
            </div>
            <div>
              <button className='kpc-button' id='right'>Deployed Site</button>
            </div>  
          </div> 
        </div>
      </div>
    </section>
  )
}
function GetItPython() {
  return (
    <section className='GeyIt'>
        <h3 className='sub-title'>Django Secure Web + Agile Project</h3>
        <h1 className='project-kpc-title'>Get IT Python</h1>
        <div className='project-top-container'>
          <div className='project-txt-container'>
            <p className='project-txt'>I would like to introduce my web projects, 
            that I enjoyed creating. On top of the focus on coding 
            I was lucky to solely do the UX design for all the projects. 
            Furthermore, utilising the process and procedures of agile prot, 
            jecacting in the role of scrum master, developer, tester, 
            business analyst, financial staff or even project manager. 
            Each project demonstrates my achievements, growing skills, 
            and opportunities for further growth.</p>
          </div>
        </div> 
    </section>
  )
}
