// style
import './KPCProject.css'

// images

export default function KPCProject() {
  return (
    <>
      <KpcTop />
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
        <a href='https://github.com/Masamist/Get_It_Python_Project'>
          <button className='project-top-button' id='gap'>Code on GitHub</button>
        </a>
        <a href='https://masamist.pythonanywhere.com/'>
          <button className='project-top-button'>Deployed Site</button>
        </a>
      </div>

      </div>
    </section>
  )
}
