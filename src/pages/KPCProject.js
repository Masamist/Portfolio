// style
import './KPCProject.css'

// images
import kpcWebsite from '../assets/kpc-website.png'
import kpcApp from '../assets/kpc-app.png'


export default function KPCProject() {
  return (
    <>
      <KpcTop />
      <Requirement />
    </>
  )
}

function KpcTop() {
  return (
    <section className='kpc-top'>
      <div className='kpc-container'>
        <h1 className='kpc-top-title'>Kauri Point
          Construction Project</h1>
        <p className='kpc-top-txt'>
        Kauri Point Construction is a company based in Auckland 
        that provides construction services big and small such as 
        new builds, renovation, cabinetry, fencing and landscaping. 
        It is a limited company established in February 2021. 
        This project included planning, building, and testing a 
        project management app. Kauri Point Construction also had 
        no website for their customers, thus customer landing pages 
        were also in scope.  
        </p>
        <div className='project-top-link'>
          <a href='https://github.com/Masamist/KauriPointConstruction'>
            <button className='project-top-button' id='gap'>Code on GitHub</button>
          </a>
          <a href='https://www.kauripointconstruction.co.nz/'>
            <button className='project-top-button'>Deployed Site</button>
          </a>
        </div>
      </div>
    </section>
  )
}

function Requirement() {
  return (
    <section className='kpc-req-container '>
      <div className='container '>
        <h1 className='kpc-top-title'>Requirement</h1>
        <div className='kpc-img-container'>
          <div>
            <img src={kpcWebsite} alt='Kauri Point Construction Website' />
          </div>
          <div>
            <img src={kpcApp} alt='Kauri Point Construction App' />
          </div>
          
        </div>
        
        
        <h2>Problems and Solutions</h2>
        <p className='kpc-top-txt'>
        The problem is Kauri Point Construction does not have a project 
        management system everything is currently done manually across many 
        separate files. For instance, project scheduling is communicated verbally 
        by the project manager if the plan changes this can result in confusion, 
        rework and a dissatisfied customer.<br />
        A successful solution would be introducing a digital solution that 
        includes process automation and tracking. 
        The web-based project management system includes the business processes 
        for project management, workforce scheduling and optimisation, accounting 
        management, with all the steps in one centralised place, therefore the 
        project information is always accurate and current. Moreover, 
        the company focus on sustainability contributes to society and the 
        community. The solution reduces paper-based documentation saving 
        valuable resources and decreasing emissions by removing unnecessary 
        travel due to scheduling errors. 
        </p>
        
        <h2>Context Diagram</h2>
      </div>
    </section>
  )
}
