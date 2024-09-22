// style
import '../scss/SchoolKitchen.scss'

// images
import skDiagram from '../assets/sk_diagram.png'
import skRole from '../assets/sk_role.png'
import sk_persona from '../assets/sk_personas.png'
import sk_sitemap from '../assets/sk_sitemap.png'
import sk_login_screen from '../assets/sk_login_screen.png'
import sk_sign_up_screen from '../assets/sk_sign_up_screen.png'
import sk_register_screen from '../assets/sk_register_screen.png'
import sk_home_screen from '../assets/sk_home_screen.png'
import sk_menu_screen from '../assets/sk_menu_screen.png'
import sk_meal_screen from '../assets/sk_meal_screen.png'
import sk_shopping_bag_screen from '../assets/sk_shopping_bag_screen.png'
import sk_checkout_screen from '../assets/sk_checkout_screen.png'
import sk_wireframe_flow from '../assets/sk_wireframe_flow.png'
import sk_taskflow from '../assets/sk_taskflow.png'


export default function KPCProject() {
  return (
    <>
      <SchoolKitchenTop />
      <Details />
      <Summary />
    </>
  )
}

const SchoolKitchenTop = () => {
  return (
    <section className='bg-container-white'>
        <div className='sk-top-container'>
          <h1 className='sk-top-title'>School Kitchen<br />
            Mobile App Project</h1>
          <p className='txt-primary'>
            School Kitchen mobile app aims to simplify the lunch ordering process 
            and facilitate payment transactions. This user-friendly mobile 
            platform provides parents with a convenient and time-saving 
            solution for placing orders. Meanwhile, food providers interested 
            in joining the lunch order service can easily access the system, 
            update menus regularly to reflect changes in factors such as 
            seasonal availability and food market prices, and efficiently 
            manage and fulfill orders.
          </p>
          <a href='https://github.com/Masamist/SchoolKitchen'>
            <button className='btn-kpcfill' id="kpc-btn-top">Code on GitHub</button>
          </a>
      </div>
    </section>
  )
}

const Details = () => {
  return (   
    <section className='bg-container-white'>
      <div className='inner-container-col'>
        <h1 className='sk-cat-name'>Requirement</h1>
        <div className='sk-img-container'>
          <h2 className='sk-sub-heading'>Problems and Solutions</h2>
          <p className='txt-primary'>Technology evolves rapidly, leading many schools 
            to adopt online lunch ordering systems. However, both parents and food providers 
            remain unsatisfied. Parents encounter usability issues and find the process 
            time-consuming, while food providers face limitations despite potential support 
            from local restaurants and cafes.
          </p>
          <p className='txt-primary'>
            School Kitchen app is designed to streamline the lunch ordering process and 
            encompassing payment processing. The app offering parents a user-friendly 
            mobile platform for convenient and time-saving orders. 
            Food providers who wish to participate in the lunch order service can easily 
            access the system, regularly update menus to reflect changing factors such as 
            seasonal availability and food market prices, as well as efficiently manage and 
            fulfil orders.</p>
        </div>          
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>Context Diagram</h2>
        <img className='kpc-img-diagram' src={skDiagram} alt='Context Diagram' />
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>User Roles</h2>
        <img className='kpc-img-diagram' src={skRole} alt='Context Diagram' />
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>Unique Feature: Monthly ordering system</h2>
        <p className='txt-primary'>
          In recent times, household expenses have been on the rise due to significant inflation and with many parents 
          leading busy lives, preparing lunch in the morning has become a challenge. 
          "School Kitchen" offers weekly or monthly meal plans to ensure kids receive balanced 
          meals and ease the burden of lunch preparation for busy parents.
        </p>
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>Product Users</h2>
        <p className='txt-primary'>
          <b>Primary users: </b>Parents/Caregivers, Food providers, Delivery agents,
              School, School Kitchen staff<br />
          <b>Secondary users: </b>App Admins, Marketers, Local business, Health organizations,
            Bank / Financial systems, Local communities, Privacy Regulators, Projects teams including developers, Data analysts, Social network service providers 
        </p>
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>Persona</h2>
        <img className='kpc-img-diagram' src={sk_persona} alt='Persona' />
      </div>

      <div className='inner-container-col'>
      <h2 className='sk-sub-heading'>Scope</h2>
        <p className='txt-primary'>
          This project has four user groups including parents, food providers, schools and 
          delivery agents, I am focusing on parents as the primary users, and research and 
          analysis will continue for the rest of user groups in the future iterations.
        </p>
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>Platform and Features</h2>
        <p className='txt-primary'>
          <b>Platform:</b><br />
          Since the primary users of the lunch order system are parents and caregivers, 
          the most common device used is a mobile phone. Mobile apps have many advantages:<br />
          - Enhanced user experience is optimised for mobile devices, it often has a faster loading time and seamless experience<br />
          - Push notifications to users allows order reminders<br />
          - Direct access to service which enables reduction of steps within the tasks compared to navigating through a website<br />
          Therefore, cross-mobile app development has been chosen for this project scope.<br />
        </p>
        <p className='txt-primary'>
          <b>Features:</b><br />
          In the initial iteration, the following features will be included:<br />
          - Users can search meals<br />
          - Allergy information should be readily accessible<br />
          - Users can save their favourite meals for easy access<br />
          - Viewing each child's order available on both list and individual meal pages
        </p>
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>Navigation Overview</h2>
        <img className='kpc-img-diagram' src={sk_sitemap} alt='Navigation Overview' />
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>Wire-frames and Application Flow</h2>
        <img className='kpc-img-diagram' src={sk_wireframe_flow} alt='Wireframe and Application Flow' />
      </div>

      <div className='inner-container-col'>
        <h2 className='sk-sub-heading'>Task Flow</h2>
        <img className='kpc-img-diagram' src={sk_taskflow} alt='Tawsk Flow' />
      </div>
    
      <div className='inner-container-col'>
        <div className='sub-heading-container'>
          <h1 className='sk-cat-name'>Design Solutions</h1>
        </div>
        
        <h2 className='sk-sub-heading'>UI Design example - Mobile App</h2>
        <div className='sk-ui-img-container'>
          <div>
            <img src={sk_login_screen} alt='Mobile App Login' />
          </div>
          <div>
            <img src={sk_sign_up_screen} alt='Mobile App Sign Up' />
          </div>
          <div>
            <img src={sk_register_screen} alt='Mobile App Register' />
          </div>
        </div>
      </div>

      <div className='inner-container-col'>
        <div className='sk-ui-img-container'>
          <div>
            <img src={sk_home_screen} alt='Mobile App Home' />
          </div>
          <div>
            <img src={sk_menu_screen} alt='Mobile App Menu' />
          </div>
          <div>
            <img src={sk_meal_screen} alt='Mobile App Meal' />
          </div>
        </div>
      </div>

      <div className='inner-container-col'>
        <div className='sk-ui-img-container'>
          <div>
            <img src={sk_shopping_bag_screen} alt='Mobile App Shopping Bag' />
          </div>
          <div>
            <img src={sk_checkout_screen} alt='Mobile App Check Out' />
          </div>
          <div></div>
        </div>
      </div>
        
      <div className='inner-container-col'>
      <h1 className='sk-cat-name'>Development</h1>
        <h2 className='sk-sub-heading'>My role</h2>
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
      
      
    </section>
  )
}

const Summary = () => {
  return (
    <summary className='summary-container-sk'>
      <div className='inner-container-col'>
        <h2 className='kpc-sub-heading' id="txt-white">Summary</h2>
        <p className='txt-white'>
        Overall, the project went extremely well, our team showcased our skills, 
        we learnt a lot and the client was very impressed with the web 
        application. Projects are always challenging, the code does not work 
        sometimes, the reward is resolving the issues and bugs.
        </p>
        
        <div className='project-btn-container'>
          <div className='btn-inner-container-half'>
            <a href='https://github.com/Masamist/KauriPointConstruction'>
              <button className='project-btn-skfill'>Code on GitHub</button>
            </a>
          </div>
        </div>
      </div>  
    </summary>
  )
}