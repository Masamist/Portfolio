// style
import '../scss/SmahhProject.scss'
import '../scss/ProjectDetailCommon.scss'

// images
import smahhUseCase from '../assets/smahh_use_case.png'
import smahhSequence from '../assets/smahh_sequence_diagram.png'
import smahh_home_screen from '../assets/smahh_home_screen.png'
import smahh_about_screen from '../assets/smahh_about_screen.png'
import smahh_services_screen from '../assets/smahh_services.png'
import smahh_services2_screen from '../assets/smahh_services_2.png'
import smahh_testmonial_screen from '../assets/smahh_ testimonial_screen.png'
import smahh_contact_screen from '../assets/smahh_contact_screen.png'



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
      <div className='inner-container-col'>
        <h1 className='pdc-cat-name'>Project Analysis</h1>
        <dev className='inner-container-col'>
        <h2 className='pdc-sub-heading'>Project Descriptions</h2>
          <p className='txt-primary'>
          This project is for Smahh, a cybersecurity and IT consulting company 
          located in Wellington, which faced two key problems: the lack of a 
          digital customer platform such as an online ticketing system and the 
          current unsatisfactory state of Smahh's website. 
          Their crucial business processes were manual often resulting, 
          resulting in sub-optimal performance that led to miscommunication, 
          delayed responses and delay in resolution of issues. Additionally, 
          their current simplistic website fails to showcase their expansive 
          and comprehensive services.<br /><br /> 
          To address these challenges, the project proposed a comprehensive 
          solution that included developing a ticketing system from scratch 
          and enhancing the website, with five key objectives. First, 
          improving website content and UI design. Second, creating a 
          ticketing system with advanced features like dynamic status tracking 
          and communication. Third, implementing authentication for system 
          security. Fourth, integrating the website with the ticketing system. 
          Finally, evaluating the overall solution.
          </p>
        </dev>
        <dev className='inner-container-col'>
          <h2 className='pdc-sub-heading'>Requirement Analysis</h2>
          <p className='txt-primary'>
          This involves thorough research into pertinent websites and ticketing systems. 
          These insights will be valuable for identifying features, enhancements, 
          and what issues to avoid for the proposed web-based solution. Meanwhile, 
          delving into business requirements gathered through a series of stakeholder 
          interviews. The interviews have been virtually conducted via Microsoft Teams, 
          unfortunately it was not able to be in person due to the budget constraints. 
          This involves thorough research into pertinent websites and ticketing systems. 
          These insights will be valuable for identifying features, enhancements, and what 
          issues to avoid for the proposed web-based solution. Meanwhile, delving into 
          business requirements gathered through a series of stakeholder interviews. 
          The interviews have been virtually conducted via Microsoft Teams, unfortunately 
          it was not able to be in person due to the budget constraints. 
          There are three interviewees, industry supervisor, internal supervisor and 
          Smahh owner. The requirements are the cornerstone of our project, delineating 
          both the functional and non-functional aspects essential for its success.
          There are three interviewees, industry supervisor, internal supervisor and 
          Smahh owner. The requirements are the cornerstone of our project, delineating 
          both the functional and non-functional aspects essential for its success.
          </p>
        </dev>
        <dev className='inner-container-col'>
          <h2 className='pdc-sub-heading'>Requirement Determination</h2>
          <p className='txt-primary'>
          Business requirements were gathered through  stakeholder interviews. 
          Three key stakeholders were interviewed: the industry supervisor, 
          internal supervisor, and the Smahh owner. The gathered requirements 
          define both functional and non-functional aspects crucial to the 
          success of the project.
          </p>
          <h3 className='smahh-mini-heading'>Functional Requirement</h3>
          <p className='txt-primary'>
          <b>Website: </b> Must include a homepage, services, about us, 
          testimonials, and a contact form. Content includes detailed 
          service descriptions and client logos. The contact form must 
          validate input, send messages to the manager, 
          and allow users to select an inquiry category.<br />
          <b>Ticketing System: </b>
          User roles: Manager, Agent, and Client with secure login.
          Core features: Ticket creation, assignment, status tracking, merging, communication, and ticket closure/reopening.
          Functionality includes notification system and ticket filtering based on user role.
          </p>
          <h3 className='smahh-mini-heading'>Non-Functional Requirement</h3>
          <p className='txt-primary'>
          <b>Operational: </b>Responsive design for all devices and browsers; integration between 
          the website and ticketing system; backup and recovery plans.<br />
          <b>Security: </b>Ensures data protection, privacy, reliability, and uptime. <br />
          <b>Performance: </b>Scalable to support growing user base and efficient in handling tasks.<br /> 
          <b>Compliance: </b>Adheres to local laws and standards, including privacy, IP, security, and 
          accessibility.
          </p>
        </dev>
        <dev className='inner-container-col'>
          <h2 className='pdc-sub-heading'>Product Users</h2>
          <h3 className='smahh-mini-heading'>Primary users: </h3>
          <p className='txt-primary'>
          Parents/Caregivers, 
          Food providers, 
          Delivery agents, 
          School, 
          School Kitchen staff, 
          </p>
          <h3 className='smahh-mini-heading'>Secondary users:  </h3>
          <p className='txt-primary'>
          App Admins, 
          Marketers, 
          Local business, 
          Health organizations, 
          Bank / Financial systems, 
          Local communities, 

          Privacy Regulators, 
          Projects teams including developers, 
          Data analysts, 
          Social network service providers, 
          </p>
        </dev>
        <dev className='inner-container-col'>
          <h2 className='pdc-sub-heading'>Scope</h2>
          <p className='txt-primary'>
          This project has four user groups including parents, food providers, 
          schools and delivery agents, I am focusing on parents as the primary users, 
          and research and analysis will continue for the rest of user groups in the 
          future iterations. 
          </p>
        </dev>
        <dev className='inner-container-col'>
          <h2 className='pdc-sub-heading'>Use Cases</h2>
          <p className='txt-primary'>
          The use cases for Smahh ticketing system were identified the interaction between 
          the system and the users to achieve the user’s goals. There are three user cases, 
          Smahh agent, client, and manager,these figures are examining how each user acts and 
          interacts with the ticketing system by identifying the procedures and detail. 
          Then an overview of system interaction with all the use cases are provided in the 
          Chain Use Case Diagram.
          </p>
          <img className='kpc-img-diagram' src={smahhUseCase} alt='Use Case Diagram' />
        </dev>
        <dev className='inner-container-col'>
          <h2 className='pdc-sub-heading'>Sequence Diagram</h2>
          <p className='txt-primary'>
          In the sequence diagram, the login and ticketing system are depicted as objects 
          representing internal system components, while the primary users including Manager, 
          Agent, and Client are identified as external entities interacting with the system. 
          Vertical lines represent the timeline, while horizontal lines show the sequence of 
          events. This diagram provides a more detailed view than the use case diagram above, 
          it provides valuable insights into the system's interactions and facilitates assessment 
          of its functionality, performance, and characteristics.
          </p>
          <img className='kpc-img-diagram' src={smahhSequence} alt='Sequence Diagram' />
        </dev>
      </div>
      <div className='inner-container-col'>
        <h1 className='pdc-cat-name'>Design Solution</h1>
        <dev className='inner-container-col'>
        <h2 className='pdc-sub-heading'>System Architecture Design</h2>
          <p className='txt-primary'>
          This project is for Smahh, a cybersecurity and IT consulting company located in Wellington, 
          which faced two key problems: the lack of a digital customer platform such as an online 
          ticketing system and the current unsatisfactory state of Smahh's website. 
          Their crucial business processes were manual often resulting, resulting in sub-optimal 
          performance that led to miscommunication, delayed responses and delay in resolution of 
          issues. Additionally, their current simplistic website fails to showcase their expansive 
          and comprehensive services. <br /><br />

          To address these challenges, the project proposed a comprehensive solution that included 
          developing a ticketing system from scratch and enhancing the website, with five key 
          objectives. First, improving website content and UI design. Second, creating a ticketing 
          system with advanced features like dynamic status tracking and communication. Third, 
          implementing authentication for system security. Fourth, integrating the website with 
          the ticketing system. Finally, evaluating the overall solution.
          </p>
        </dev>
        <div className='inner-container-col'>
        <div className='pdc-ui-img-container'>
          <div>
            <img src={smahh_home_screen} alt='Smahh Home' />
          </div>
          <div>
            <img src={smahh_about_screen} alt='Smahh About Page' />
          </div>
          <div>
            <img src={smahh_services_screen} alt='Smahh services Page' />
          </div>
        </div>
      </div>

      <div className='inner-container-col'>
        <div className='pdc-ui-img-container'>
          <div>
            <img src={smahh_services2_screen} alt='Smahh Resources Page' />
          </div>
          <div>
          <img src={smahh_testmonial_screen} alt='Smahh Testmonial Page' />
          </div>
          <div>
            <img src={smahh_contact_screen} alt='Smahh Contact Page' />
          </div>
        </div>
      </div>
      </div>

      <div className='inner-container-col'>
        <div className='sub-heading-container'>
          <h1 className='pdc-cat-name'>Development</h1>
        </div>
        <h2 className='pdc-sub-heading'>My role</h2>
        <p className='txt-primary'>
        Led the successful delivery of a user-friendly website and ticketing 
        system for Smahh Cybersecurity as part of my final-year internship project. 
        Took on multiple roles, including Business Analyst, UX/UI Designer, Web 
        Developer, and Tester, to drive the project from concept to deployment. 
        Utilized Next.js for rapid, enterprise-grade web development and Firebase 
        for real-time updates and secure data management. Applied a structured 
        approach to requirements gathering, solution design, and iterative 
        testing to ensure alignment with business goals and user needs. 
        The project established a strong foundation for future development 
        and demonstrated the effective integration of modern web technologies.
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
        As part of my final-year internship, I designed and developed a responsive website and 
        integrated ticketing system for Smahh Cybersecurity. The project aimed to streamline 
        client interactions and support processes through a modern, scalable web solution. 
        Built using Next.js for fast, enterprise-ready development and Firebase for secure, 
        real-time data handling, the system delivers a seamless user experience. A structured 
        process of requirements gathering, UX/UI design, development, and iterative testing 
        ensured the final product met both user needs and business objectives. This project 
        serves as a strong foundation for future enhancements and highlights the practical 
        application of full-stack web development in a real-world cybersecurity context.
        </p>
        <div className='project-btn-container'>
          <div className='btn-inner-container-half'>
            <a href='https://github.com/Masamist/SmahhProject'>
              <button className='project-btn-smahhfill'>Code on GitHub</button>
            </a>
          </div>
        </div>
      </div>  
    </summary>
  )
}