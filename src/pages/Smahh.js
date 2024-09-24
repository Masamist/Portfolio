// style
import '../scss/SmahhProject.scss'

// images
import kpcWebsite from '../assets/kpc_website.png'
import kpcApp from '../assets/kpc_app.png'
import kpcDiagram from '../assets/kpc_diagram.png'
import kpcRole from '../assets/kpc_role.png'
import kpcWebHome from '../assets/kpc_web_home.png'
import kpcWebProject from '../assets/kpc_web_project.png'
import kpcPmsForm from '../assets/kpc_pms_form.png'
import kpcPmsProjectList from '../assets/kpc_pms_project_list.png'


export default function SmahhProject() {
  return (
    <>
      <Smahh />
      <Details />
      <Summary />
    </>
  )
}

const Smahh = () => {
  return (
    <section className='smahh-top'>
      <div className='smahh-container'>
        <h1 className='smahh-top-title'>Smahh Website &<br />
          Ticketing System Project</h1>
        <p className='txt-white'>
        This project is the final internship project for my bachelor degree 
        and successfully delivers a robust and user-friendly website and ticketing 
        system for Smahh cybersecurity company. The technologies for this  project 
        are selected as Next.js which is a web framework enables the rapid 
        development and deployment of enterprise-ready applications, and 
        Firebase providing a scalable and efficient solution, ensuring 
        real-time updates and secure data handling. A systematic approach 
        to requirement gathering, solution design, and iterative testing ensures 
        that the final product meets user needs and aligns with Smahh's business 
        objectives. This project lays a strong foundation for future enhancements 
        and offers valuable insights into the development of integrated web-based 
        solutions. 
        </p>
        <a href='https://github.com/Masamist/KauriPointConstruction'>
          <button className='btn-smahhfill' id="kpc-btn-top">Code on GitHub</button>
        </a>
        <a href='https://www.kauripointconstruction.co.nz/'>
          <button className='btn-smahhfill'>Deployed Site</button>
        </a>
      </div>
    </section>
  )
}

const Details = () => {
  return (
    <section className='bg-container-white'>
      <div className='kpc-img-container'>
          {/* <div>
            <img src={kpcWebsite} alt='Kauri Point Construction Website' />
          </div>
          <div>
            <img src={kpcApp} alt='Kauri Point Construction App' className='img-border' />
          </div> */}
      </div>

      <div className='inner-container-col'>
        <h1 className='kpc-cat-name'>Project Analysis</h1>
        <h2 className='kpc-sub-heading'>Problems and Solutions</h2>
        <p className='txt-primary'>
        This project is for Smahh, a cybersecurity and IT consulting company located 
        in Wellington, which faced two key problems: the lack of a digital customer 
        services such as an online ticketing system and the current poor state of 
        Smahh's website. Their crucial business processes were manual often resulting, 
        resulting in sub-optimal performance that led to miscommunication, delayed 
        responses and delay in resolution of issues. Additionally, their current 
        simplistic website fails to showcase their expansive and comprehensive services.<br /><br /> 
        To address these challenges, the project proposed a consolidated solution 
        consisting of the ticketing system built from the ground up and 
        improvements to the website, focusing on five project objectives. 
        First, improving the website contents and UI design. Second, 
        developing a ticketing system including advanced features such as 
        dynamic web-based tickets status tracking and communication. Third, 
        incorporating authentication for system security. Forth, integrating 
        the two solutions: the website and ticketing system. 
        Finaly, evaluating the resulted solution.
        </p>
      </div>
      
    </section>
  )
}

const Summary = () => {
  return (
    <summary className='summary-container-smahh'>
      <div className='inner-container-col'>
        <h2 className='kpc-sub-heading' id="txt-white">Summary</h2>
        <p className='txt-white'>
        Updated information will be provided shortly.
        </p>
      </div>  
    </summary>
  )
}