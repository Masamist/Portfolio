// style
import '../scss/KPCProject.scss'

// images
import kpcWebsite from '../assets/kpc_website.png'
import kpcApp from '../assets/kpc_app.png'
import kpcDiagram from '../assets/kpc_diagram.png'
import kpcRole from '../assets/kpc_role.png'
import kpcWebHome from '../assets/kpc_web_home.png'
import kpcWebProject from '../assets/kpc_web_project.png'
import kpcPmsForm from '../assets/kpc_pms_form.png'
import kpcPmsProjectList from '../assets/kpc_pms_project_list.png'


export default function KPCProject() {
  return (
    <>
      <KpcTop />
      <Details />
    </>
  )
}

function KpcTop() {
  return (
    <section className='kpc-top'>
      <div className='kpc-container'>
        <h1 className='kpc-top-title'>Kauri Point<br />
          Construction Project</h1>
        <p className='txt-primary'>
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
            <button className='btn-kpc' id='gap'>Code on GitHub</button>
          </a>
          <a href='https://www.kauripointconstruction.co.nz/'>
            <button className='btn-kpc'>Deployed Site</button>
          </a>
        </div>
      </div>
    </section>
  )
}

function Details() {
  return (
    <section className='bg-container-white'>
      <div className='kpc-img-container'>
          <div>
            <img src={kpcWebsite} alt='Kauri Point Construction Website' />
          </div>
          <div>
            <img src={kpcApp} alt='Kauri Point Construction App' />
          </div>
      </div>

      
      <div className='inner-container-col'>
        <h1 className='kpc-cat-name'>Requirement</h1>
        <h2 className='kpc-sub-heading'>Problems and Solutions</h2>
        <p className='txt-primary'>
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
      </div>
        
      <div className='inner-container-col'>
        <h2 className='kpc-sub-heading'>Context Diagram</h2>
        <img className='kpc-img-diagram' src={kpcDiagram} alt='Context Diagram' />
      </div>

      <div className='inner-container-col'>
        <h2 className='kpc-sub-heading'>User Roles</h2>
        <img className='kpc-img-diagram' src={kpcRole} alt='Context Diagram' />
      </div>

      <div className='inner-container-col'>
        <h2 className='kpc-sub-heading'>User Stories</h2>
        <p className='txt-primary'>
        <b>Client:</b> I want to be able to be out of town for a week and still see how 
        the project is progressing daily.<br />
        <b>Manager:</b> I dream of pricing up a job using a library of Tasks I've already executed on projects and re-use data to speed up the process.<br />
        <b>Manager: </b>I want to record all project details in one place which can be shared with authorised users, so I don’t need to update disparate documents separately.<br />
        <b>Staff:</b> I like to know that I’ve completed tasks and what’s expected on site for the day.<br />
        <b>Staff:</b> It would be great to see a previous photo that my workmate took last week, he’s unavailable today.<br />
        <b>Accountant:</b> As an accountant I like to see where my money is going and want a detailed breakdown.<br />
        </p>
      </div>

      <div className='inner-container-col'>
      <h2 className='kpc-sub-heading'>Scope</h2>
        <p className='txt-primary'>
        Our scope was to build the project management app for the manager which 
        records each projects details, tasks and estimate cost list, and labour 
        list which shows estimate days per task by labour. Customer landing 
        pages were also included in the first release.
        The workforce management system is in the backlog, as currently they use 
        an existing online service for staff to clock in and clock out.
        Accounting system including payroll is out of scope. It will be included 
        in the next release, or it might integrate to COTs such as Xero or MYOB. 
        Depending on the financial situation of the construction company, however 
        the COTs option would be my recommendation to simplify bank 
        reconciliation and accuracy, avoiding legal issues.
        </p>
      </div>
    
      <div className='inner-container-col'>
      <h1 className='kpc-cat-name'>Design Solutions</h1>
        <h2 className='kpc-sub-heading'>UI Design example - Website</h2>
        <div className='kpc-ui-img-container'>
          <div>
            <img src={kpcWebHome} alt='Website Homepage' />
          </div>
          <div>
            <img src={kpcWebProject} alt='Website Project page' />
          </div>
        </div>
      </div>

      <div className='inner-container-col'>
        <h2 className='kpc-sub-heading'>UI Design example - Project Managament App</h2>
        <div className='kpc-ui-img-container'>
          <div>
            <img src={kpcPmsProjectList} alt='Project Managament App Project List' />
          </div>
          <div>
            <img src={kpcPmsForm} alt='Project Managament App Form' />
          </div>
        </div>
      </div>
        
      <div className='inner-container-col'>
      <h1 className='kpc-cat-name'>Development</h1>
        <h2 className='kpc-sub-heading'>My role</h2>
        <p className='txt-primary'>
        This was a large-scale project that I successfully completed with a 
        classmate, we worked together to create and deploy the web application, 
        it was a significant undertaking as it would normally be assigned to a 
        team of 4 to 5 students. My roles were: business analyst, I researched 
        and created the business and solution requirements and populated each 
        document, UI designer design including mock-ups. My main role was 
        back-end developer. We decided to use React JS as our web framework 
        and Firebase for our database. I considered utilizing Node JS as the 
        back end; however Firebase has authentication including web token and 
        React hooks simplifies firebase implementation. React and Firebase are 
        a good combination for a project of this size and enabled us to complete 
        the project on a tight schedule. This was my first-time using Firebase 
        it was both challenging and rewarding.
        </p>
      </div>

      <div className='inner-container-col'>
        <h2 className='kpc-sub-heading'>Summary</h2>
        <p className='txt-primary'>
        Overall, the project went extremely well, our team showcased our skills, 
        we learnt a lot and the client was very impressed with the web 
        application. Projects are always challenging, the code does not work 
        sometimes, the reward is resolving the issues and bugs.
        </p>
      </div>

      <div className='btn-container'>
        <a href='https://github.com/Masamist/KauriPointConstruction'>
          <button className='btn-kpc' id='gap'>Code on GitHub</button>
        </a>
        <a href='https://www.kauripointconstruction.co.nz/'>
          <button className='btn-kpc'>Deployed Site</button>
        </a>
      </div>
    </section>
  )
}
