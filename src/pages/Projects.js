import { Link } from 'react-router-dom'

// style
import './Projects.css'

// images

import kpc from '../assets/projetcs_kpc.png'
import toolsicon from '../assets/tools_kpc.png'
import getit_pc from '../assets/getit_pc_image.png'
import poster_getit_agile from '../assets/poster_agile.png'
import poster_getit_django from '../assets/poster_django.png'
import tools_getit from '../assets/tools_getit.png'
import poco from '../assets/poco.png'
import tools_poco from '../assets/tools_poco.png'
import game from '../assets/project_happy_chick.png'
import tools_game from '../assets/tools_game.png'
import dresources from '../assets/digital_resources.png'
import tools_dresources from '../assets/tools_digital_resources.png'
import ams1 from '../assets/ams1.png'
import ams2 from '../assets/ams2.png'
import tools_ams from '../assets/tools_ams.png'

export default function Projects() {
  return (
    <>
      <ProjectTop />
      <Kpc />
      <GetItPython />
      <Poco />
      <HappyChick />
      <DigitalResources />
      <AMS />
      <Tradies />
    </>
  )
}
function ProjectTop() {
  return (
    <section className='project-top'>
        <h1 className='project-top-title'>Projects</h1>
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
    <section className='project-wrap'>
      <div className='container'>
        <div className='project-img-container'>
          <img src={kpc} alt='Kauri Point Construction' />
          <h3 className='sub-title'>Web Software Project</h3>
          <h1 className='project-title' id='kpc-image'>Kauri Point Construction</h1>
          <p>This project is the final project of the Software Development Course. 
            It was group work and we had an actual client, Simon, 
            who started  his own construction company a few years ago in Auckland. 
            The request was to create a project management app and also 
            a new website. It was a great opportunity to work with a real 
            client and an awesome showcase for our final project.</p>
          <div className='tool-icons-container'>
            <img className='tool-icons' src={toolsicon} alt='Tool icons' />
          </div>
          
          <div className='kpc-button-container'>
            <div>
              <button className='kpc-button-whole'>More about project</button>
            </div>
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
      <div className='container'>
        <div className='getit-container'>
          <div>
            <h3 className='sub-title' id='white-txt-color'>Django Secure Web + Agile Project</h3>
            <h1 className='project-title' id='white-txt-color'>Get IT Python</h1>
            <p className='project-txt' id='project-txt-getit'>I would like to introduce my web projects, 
            that I enjoyed creating. On top of the focus on coding 
            I was lucky to solely do the UX design for all the projects. 
            Furthermore, utilising the process and procedures of agile prot, 
            jecacting in the role of scrum master, developer, tester, 
            business analyst, financial staff or even project manager. 
            Each project demonstrates my achievements, growing skills, 
            and opportunities for further growth.</p>
          </div>
          <div>
            <img src={getit_pc} alt='Get IT Python PC' />
          </div>
        </div>
        <div className='poster-container'>
          <div>
            <img src={poster_getit_agile} alt='Get IT Agile Poster' />
            <img src={poster_getit_django} alt='Get IT Django Poster' />
          </div>

          <div className='getit-txt-container'>
            <p className='project-txt' id='white-txt-color'>This project was such a great opportunity to learn about Agile project management and building a secure app with the Django web framework. In a group working together I had a turn at each role using agile project tools for agile management.
              My role for building the application was UI designer and 
              front-end developer, I created the home, about page and acting as 
              a tester to make several unit tests, UAT testing, cross-browser testing. 
              Also, I coded the whole social Q&A page which was a great opportunity 
              to create a social interactive page.</p>
            <div className='tool-icons-container'>
              <img className='tool-icons' src={tools_getit} alt='Tool icons' />
            </div>
            <div className='project-single-link'>
              <a href='https://github.com/Masamist/Get_It_Python_Project'>
                <button className='project-single-button' id='gap'>Code on GitHub</button>
              </a>
              <a href='https://masamist.pythonanywhere.com/'>
                <button className='project-single-button'>Deployed Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  )
}

function Poco() {
  return (
    <section className='project-wrap'>
      <div className='container'>
        <div className='project-img-container'>
          <img src={poco} alt='Poco a Poco' />
          <h3 className='sub-title'>CMS Web Project</h3>
          <h1 className='project-title' id='poco-color'>poco a poco hair saloon</h1>
          <p>This Web project was to create a website using a Content Management System (CMS). 
            The client is ‘poco a poco’ hair saloon located in Newmarket, 
            Auckland. Poco a poco takes reservations by phone, which sometimes creates 
            mistakes such as double bookings or writing down the wrong date or time, 
            the client has decided to introduce an online booking system which minimizes 
            the number of calls for reservations.
            <br />
            <br />
            This project is a solo project working with a real client an opportunity 
            to research CMS and their benefits and how they are configured. 
            I created a static website, then included the CMS as a customer 
            linking to the CMS site when they make a reservation. 
            For ‘pocp a poco’ the CMS, I  selected was SimplyBook.me. 
            This is web based software CMS which enables you to create a 
            booking then synchronize your booking on your calendar, 
            also has features like managing membership and email remainder. </p>
          <div className='tool-icons-container'>
            <img className='tool-icons' src={tools_poco} alt='Tool icons' />
          </div>
          
          <div className='project-single-link'>
              <a href='https://github.com/Masamist/Get_It_Python_Project'>
                <button className='project-poco-button' id='gap'>Code on GitHub</button>
              </a>
              <a href='https://github.com/Masamist/Get_It_Python_Project'>
                <button className='project-poco-button'>Code on GitHub</button>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

function HappyChick() {
  return (
    <section className='game'>
      <div className='container'>
        <div className='game-container'>
          <div>
            <h3 className='sub-title' id='white-txt-color'>
            Godot Gaming Project
            </h3>
            <h1 className='project-title' id='white-txt-color'>Happy Chick</h1>
            <p className='project-txt' id='game-txt-color'>This is a solo project and my first time 
            creating a game. This game is 2D side scroll platform made with Godot Game 
            Engine which can be enjoyed by children through to adults. 
            I planed the game story, character setting and selecting music. 
            Godot was excellent for me to learn OOP(Object Oriented Programming) concepts. 
            It was also enjoyable to create my own game, character movement, levels, 
            setting up goals and so on. </p>
          </div>
          <div>
            <img src={game} alt='Happy Chick' className='game-image' />
          </div>
        </div>
        <div className='poster-container'>
          <div>
            <img src={game} alt='Happy Chick' className='game-image' />
          </div>
          <div className='getit-txt-container'>
            <p className='project-txt'>The main character is a super cute chick which is 
            a bit lonely and bored with his normal life, and he is dreaming about 
            exploring outside his small world. One day he decided to get out of his 
            house and travel around to experience life. During the trip he meets many 
            animals who are in trouble, like they have lost a number of precious items. 
            The chick helps them find the items, at the end he gets lots of friends by 
            collecting these unique items, also a few secret items. At the end of the trip, 
            he would become a super happy chick with many friends and found a wonderful 
            girlfriend.</p>
            <div className='tool-icons-container'>
              <img className='tool-icons' id='game-tools-icon' src={tools_game} alt='Tool icons' />
            </div>
            <div className='project-single-link'>
              <a href='https://github.com/Masamist/HappyChick'>
                <button className='game-button' id='gap'>Code on GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  )
}

function DigitalResources() {
  return (
    <section className='project-wrap'>
      <div className='container'>
        <div className='project-img-container'>
          <img id='dresources_img' src={dresources} alt='Whitecliffe Digital Resources' />
          <h3 className='sub-title'>Web Academic Library Project</h3>
          <h1 className='project-title' id='dresources-color'>Whitecliffe Digital Resources</h1>
          <p>This project is a team project to create online digital resources 
              for an lerning institution.
              This Whitecliffe Digital Resources project is a group project. 
              I worked as the front-end and UI designer. 
              I prioritized the key search function first, as in most cases students
              type a keyword, like in a google search engine. 
              The application is simple with intuitive design, 
              so the student can easily search and locate the article they require. 
              We built this application with Django web framework and MongoBD 
              as the database.</p>
          <div className='tool-icons-container'>
            <img className='tool-icons' src={tools_dresources} alt='Tool icons' />
          </div>
          
          <div className='project-single-link'>
              <a href='https://github.com/Masamist/Get_It_Python_Project'>
                <button className='dresources-button' id='gap'>Code on GitHub</button>
              </a>
              <a href='https://github.com/Masamist/Get_It_Python_Project'>
                <button className='dresources-button'>Code on GitHub</button>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

function AMS() {
  return (
    <section className='project-wrap'>
      <div className='container'>
        <div className='project-img-container'>
          <h3 className='sub-title'>Xamarine Mobile App Development</h3>
          <h1 className='project-title' id='ams-color'>AMS Mobile App</h1>
          <p>AMS (Auckland Merchandise Systems) is a company which provides a 
            merchandising service to various retailers. The service has conditions 
            such as day, agreed location and display method which are agreed with 
            the clients. AMS requirement was to build a mobile app to gain 
            efficient operational procedures and cost effectiveness, 
            a simple ticket creating app which enabled  the merchandisers and 
            their supervisors to plan, share and complete the daily jobs.
            This project is an individual project to create an native mobile 
            application with a cross platform mobile application tool, 
            Xamarin Form. This project was  done in early 2022, now in 2023 
            other frameworks are more popular such as React Native. 
            This project provided me with a really good understanding some 
            software design patterns such as  MVVM pattern and others like MVC 
            pattern. </p>
              <img id='dresources_img' src={ams1} alt='AMS app' />
              <img id='dresources_img' src={ams2} alt='AMS app' />
          <div className='tool-icons-container'>
            <img className='tool-icons' id='ams-tools-icon' src={tools_ams} alt='Tool icons' />
          </div>
          
          <div className='project-single-link'>
              <a href='https://github.com/Masamist/Get_It_Python_Project'>
                <button className='ams-button' id='gap'>Code on GitHub</button>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

function Tradies() {
  return (
    <section className='project-wrap' id='tradie-backgroup-color'>
      <div className='container'>
        <div className='project-img-container'>
          <h3 className='sub-title' id='tradie-txt-color'>Business Analysis + Web Project</h3>
          <h1 className='project-title' id='tradie-txt-color'>Tradies Web Service</h1>
          <p>This project was to establish a new web service called “Tradies” 
            which enables customers to search for a contractor online and send a 
            request. Registered “Tradies” contractors who are signed up to the app 
            could then be notified when there are available jobs, which if they 
            decided to take, then they can communicate with the customer with 
            regards to location, time and cost. 
            The group work was identifying the business and solution requirements 
            includes user stories, context and activity sequence diagram, and 
            individual tasks of UX design and  building the web service. 
            The challenging part was communication in the team as Covid-19 
            outbreak was during this assessment, and lock-down changed our study 
            routine and we successfully improved how we communicated with each other. </p>
              <img id='dresources_img' src={ams1} alt='AMS app' />
              <img id='dresources_img' src={ams2} alt='AMS app' />
          <div className='tool-icons-container'>
            <img className='tool-icons' id='ams-tools-icon' src={tools_ams} alt='Tool icons' />
          </div>
          
          <div className='project-single-link'>
              <a href='https://github.com/Masamist/Get_It_Python_Project'>
                <button className='ams-button' id='gap'>Code on GitHub</button>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

