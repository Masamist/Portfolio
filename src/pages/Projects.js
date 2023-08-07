import { Link } from 'react-router-dom'

// style
import '../scss/Projects.scss'

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
import tradie1 from '../assets/tradie1.png'
import tradie2 from '../assets/tradie2.png'
import tradie3 from '../assets/tradie3.png'
import tools_tradies from '../assets/tools_tradies.png'
import cinema from '../assets/cinema.png'
import tools_cinema from '../assets/tools_cinema.png'
import sugar_smash1 from '../assets/sugar_smash1.png'
import sugar_smash2 from '../assets/sugar_smash2.png'
import sugar_smash3 from '../assets/sugar_smash3.png'

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
      <EyeCandyCinema />
      <SugerSmash />
      <Others />
    </>
  )
}

const ProjectTop = () => {
  return (
    <section className='project-top'>
        <h1>Projects</h1>
        <div className='project-top-container'>
          <div className='project-txt-container'>
            <p className='txt-primary'>I would like to introduce my web projects, 
            that I enjoyed creating. On top of the focus on coding 
            I was lucky to solely do the UX design for all the projects. 
            Furthermore, utilising the process and procedures of agile project
            acting in the role of scrum master, developer, tester, 
            business analyst, financial staff or even project manager. 
            Each project demonstrates my achievements, growing skills, 
            and opportunities for further growth.</p>
          </div>
        </div> 
    </section>
  )
}

const Kpc = () => {
  return (
    <section className='bg-container-white'>
      <div className='inner-container'>
        <div className='project-col-container'>
          <img src={kpc} alt='Kauri Point Construction' />
          <h3 className='sub-title'>Web Software Project</h3>
          <h1 className='project-title-kpc'>Kauri Point Construction</h1>
          <p className='txt-primary'>This project is the final project of the Software Development Course. 
            It was group work and we had an actual client, Simon, 
            who started  his own construction company a few years ago in Auckland. 
            The request was to create a project management app and also 
            a new website. It was a great opportunity to work with a real 
            client and an awesome showcase for our final project.</p>
          <div className='tool-icons-container'>
            <img className='tool-icons' src={toolsicon} alt='Tool icons' />
          </div>
          
          <div className='project-btn-container'>
            <div className='btn-inner-container-whole'>
              <Link to="/kpc-project">
                <button className='project-btn-kpc'>More project details</button>
              </Link>
            </div>
            <div className='btn-inner-container-half'>
              <a href='https://github.com/Masamist/KauriPointConstruction'>
                <button className='project-btn-kpc'>Code on GitHub</button>
              </a>
            </div>
            <div className='btn-inner-container-half'>
              <a href='https://www.kauripointconstruction.co.nz/'>
                <button className='project-btn-kpc'>Deployed Site</button>
              </a>
            </div>  
          </div>

        </div>
      </div>
    </section>
  )
}

const GetItPython = () => {
  return (
    <section className='bg-container-primary'>
      <div className='project-row-container'>
        <div>
          <h3 className='sub-title' id='white-txt-color'>Django Secure Web + Agile Project</h3>
          <h1 className='project-title-white'>Get IT Python</h1>
          <p className='txt-white'>GET IT Python is an enterprise application 
          that is a coding tutorial application for users on how to code. 
          The first iteration was focused on Python (hence its name Get IT Python), 
          consequentially adding more programming languages. The original requirement was 
          a mobile app, then we persuaded the client, that is our lecturer, to use 
          PWA (Progressive Web App) to enable access from any device via a browser or a downloaded app. 
          The free version is for absolute beginner level, the subscription version for junior 
          developers and above is an effective tool for searching syntax or capabilities.</p>
        </div>
        <div>
          <img className='getit-pc-img' src={getit_pc} alt='Get IT Python PC' />
        </div>
      </div>
      <div className='inner-container'>
        <div className='project-col-container'>
          <div className='poster-container'>
            <img src={poster_getit_agile} alt='Get IT Agile Poster' />
            <img src={poster_getit_django} alt='Get IT Django Poster' />
            <p className='txt-white'>This project was such a great opportunity to learn about Agile project management and building a secure app with the Django web framework. In a group working together I had a turn at each role using agile project tools for agile management.
              My role for building the application was UI designer and 
              front-end developer, I created the home, about page and acting as 
              a tester to make several unit tests, UAT testing, cross-browser testing. 
              Also, I coded the whole social Q&A page which was a great opportunity 
              to create a social interactive page.</p>
            <div className='tool-icons-container'>
              <img className='tool-icons' src={tools_getit} alt='Tool icons' />
            </div>

            <div className='project-btn-container'>
              <div className='btn-inner-container-half'>
                <a href='https://github.com/Masamist/Get_It_Python_Project'>
                  <button className='project-btn-primary'>Code on GitHub</button>
                </a>
              </div>
              <div className='btn-inner-container-half'>
                <a href='https://masamist.pythonanywhere.com/'>
                  <button className='project-btn-primary'>Deployed Site</button>
                </a>
              </div>
            </div>
          </div>
        </div>  
      </div>   
    </section>
  )
}

const Poco = () => {
  return (
    <section className='bg-container-white'>
      <div className='inner-container'>
        <div className='project-col-container'>
          <img src={poco} alt='Poco a Poco' className='img-border' />
          <h3 className='sub-title'>CMS Web Project</h3>
          <h1 className='project-title-poco'>poco a poco hair saloon</h1>
          <p className='txt-primary'>This Web project was to create a website using a Content Management System (CMS). 
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
          
          <div className='project-btn-container'>
            <div className='btn-inner-container-half'>
              <a href='https://github.com/Masamist/PocoAPocoHairSaloon'>
                <button className='project-btn-poco'>Code on GitHub</button>
              </a>
            </div>
            <div className='btn-inner-container-half'>
              <a href='https://masamist.github.io/PocoAPocoHairSaloon/index.html'>
                <button className='project-btn-poco'>Code on GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const HappyChick = () => {
  return (
    <section className='bg-container-tertiary'>
      <div className='project-row-container'>
        <div>
          <h3 className='sub-title' id='white-txt-color'>
          Godot Gaming Project
          </h3>
          <h1 className='project-title-white'>Happy Chick</h1>
          <p className='txt-primary'>This is a solo project and my first time 
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
      <div className='inner-container'>
        <div className='project-col-container'>
            <video controls>
              <source src='https://firebasestorage.googleapis.com/v0/b/portfolio-2f0a8.appspot.com/o/happy_chick.mp4?alt=media&token=2d6df508-3b3a-4c89-925e-14cac10a7874' type='video/mp4' />
            </video>
            <p className='txt-primary'>
            The main character is a super cute chick which is 
            a bit lonely and bored with his normal life, and he is dreaming about 
            exploring outside his small world. One day he decided to get out of his 
            house and travel around to experience life. During the trip he meets many 
            animals who are in trouble, like they have lost a number of precious items. 
            The chick helps them find the items, at the end he gets lots of friends by 
            collecting these unique items, also a few secret items. At the end of the trip, 
            he would become a super happy chick with many friends and found a wonderful 
            girlfriend.</p>
            <div className='tool-icons-container'>
              <img className='tool-icons' src={tools_game} alt='Tool icons' />
            </div>
            
            <div className='project-btn-container'>
              <div className='btn-inner-container-whole'>
                <a href='https://github.com/Masamist/HappyChick'>
                  <button className='project-btn-game'>Code on GitHub</button>
                </a>
              </div>
            </div>
            
        </div>
      </div>
        
    </section>
  )
}

const DigitalResources = () => {
  return (
    <section className='bg-container-white'>
      <div className='inner-container'>
        <div className='project-col-container'>
          <img id='dresources_img' src={dresources} alt='Whitecliffe Digital Resources' />
          <h3 className='sub-title'>Web Academic Library Project</h3>
          <h1 className='project-title-digital-resouce'>Whitecliffe Digital Resources</h1>
          <p className='txt-primary'>This project is a team project to create online digital resources 
              for an learning institution.
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
          
          <div className='project-btn-container'>
            <div className='btn-inner-container-whole'>
              <a href='https://github.com/Masamist/DigitalResourceProject'>
                <button className='project-btn-digital-resouce' id='gap'>Code on GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AMS = () => {
  return (
    <section className='bg-container-white'>
      <div className='inner-container'>
        <div className='project-col-container'>
          <h3 className='sub-title'>Xamarine Mobile App Development</h3>
          <h1 className='project-title-ams'>AMS Mobile App</h1>
          <p className='txt-primary'>AMS (Auckland Merchandise Systems) is a company which provides a 
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
            This project provided me with a really good understanding of some 
            software design patterns such as  MVVM pattern and others like MVC 
            pattern. </p>
              <img id='dresources_img' src={ams1} alt='AMS app' />
              <img id='dresources_img' src={ams2} alt='AMS app' />
          <div className='tool-icons-container'>
            <img className='tool-icons' src={tools_ams} alt='Tool icons' />
          </div>

          {/* <div className='project-btn-container'>
            <div className='btn-full-container'>
            <a href='https://github.com/Masamist/Get_It_Python_Project'>
              <button className='project-btn-ams'>Code on GitHub</button>
            </a>
            </div> 
          </div> */}
        </div>
      </div>
    </section>
  )
}

const Tradies = () => {
  return (
    <section className='bg-container-tertiary'>
      <div className='inner-container'>
        <div className='project-col-container'>
          <h3 className='sub-title'>Business Analysis + Web Project</h3>
          <h1 className='project-title-white'>Tradies Web Service</h1>
          <p className='txt-primary'>This project was to establish a new web service called “Tradies” 
            which enables customers to search for a contractor online and send a 
            request. Registered “Tradies” contractors who are signed up to the app 
            could then be notified when there are available jobs, which if they 
            decided to take, then they can communicate with the customer with 
            regards to location, time and cost.<br />
            The group work was identifying the business and solution requirements 
            includes user stories, context and activity sequence diagram, and 
            individual tasks of UX design and  building the web service. 
            The challenging part was communication in the team as Covid-19 
            outbreak was during this assessment, and lock-down changed our study 
            routine and we successfully improved how we communicated with each other. </p>
            
          <div className='tool-icons-container'>
            <img className='tool-icons' src={tools_tradies} alt='Tool icons' />
          </div>

          <div className='project-btn-container'>
            <div className='btn-inner-container-half'>
              <a href='https://github.com/Masamist/tradies'>
                <button className='project-btn-game'>Code on GitHub</button>
              </a>
            </div>
            <div className='btn-inner-container-half'>
              <a href='https://masamist.github.io/tradies/'>
                <button className='project-btn-game'>Deployed Site</button>
              </a>
            </div>
          </div>
          <div className='tradie-image-container'>
            <img className='tradie-img' src={tradie1} alt='Tradies Mock-up' />
            <img className='tradie-img' src={tradie2} alt='Tradies Mock-up' />
            <img className='tradie-img' src={tradie3} alt='Tradies Mock-up' />     
        </div>
        </div>
        
             
      </div>
    </section>
  )
}

const EyeCandyCinema = () => {
  return (
    <section className='bg-container-white'>
      <div className='inner-container'>
        <div className='project-col-container'>
          <img src={cinema} alt='Eye Candy Cinema' className='img-border' />
          <h3 className='sub-title'>Web Project</h3>
          <h1 className='project-title-cinema'>Eye Candy Cinema</h1>
          <p className='txt-primary'>This is an individual assignment and the first website I created at 
            Whitecliffe utilising simple HTML, CSS and JavaScript. A website for 
            a cinema called Eye Candy Cinema which is a local cinema specializing 
            in international film festival movies and some indie movies. 
            This project was to gain elementary skills to build a website and 
            also planning including business analysis of client information, 
            scheduling, page site structure with wire-frames and mock-ups using 
            Figma. I also learned about data model structures and design with SQL 
            using Eye Candy Cinema movie information.</p>
          <div className='tool-icons-container'>
            <img className='tool-icons' src={tools_cinema} alt='Tool icons' />
          </div>
          
          <div className='project-btn-container'>
            <div className='btn-inner-container-half'>
              <a href='https://github.com/Masamist/EyeCandyCinemas'>
                <button className='project-btn-cinema'>Code on GitHub</button>
              </a>
            </div>
            <div className='btn-inner-container-half'>
              <a href='https://masamist.github.io/EyeCandyCinemas/'>
                <button className='project-btn-cinema'>Deployed Site</button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

const SugerSmash = () => {
  return (
    <section className='bg-container-white'>
      <div className='inner-container'>
        <div className='project-col-container'>
          <h3 className='sub-title'>Professional Practice</h3>
          <h1 className='project-title-suger-smash'>Sugar Smash</h1>
          <p className='txt-primary'>My first group project at Whitecliffe. This project was to define 
            a world problem, research and discover a solution with team mates. 
            The problem we selected was sugar consumption and health issues. 
            Sugar can be a cause of poor health, obesity, and diabetes.
            Creating an app called “Sugar Smash”  as our solution which helps 
            you to control your sugar intake with information on low sugar choices, 
            alternatives, and low sugar recipes for food that tastes fantastic and 
            is great for your health.
            We created a lean canvas using Mural board, 
            created a mock-up and presented a whole solution plan of 
            the mobile app with Figma.</p>

          <h2 className='header-unique'>Unique Value Proposition</h2>
          <div className='sugar-smash-container'>
            <div>
              <img src={sugar_smash1} alt='Sugar Smash App' />
              <h2 className='sugar-smash-h2'>Gamification</h2>
              <p className='txt-primary'>Fun game with a rewards system encouraging you to achieve your goal.</p>
            </div>
            <div>
              <img src={sugar_smash2} alt='Sugar Smash App' />
              <h2 className='sugar-smash-h2'>Easy to record products</h2>
              <p className='txt-primary'>Barcode Scanner + manual database search makes input easy.</p>
            </div>
            <div>
              <img src={sugar_smash3} alt='Sugar Smash App' />
              <h2 className='sugar-smash-h2'>Social Interactive</h2>
              <p className='txt-primary'>Social group interaction to support your goal also newsletters and articles​.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

const Others = () => {
  return (
    <section className='bg-container-primary'>
      <h1 className='project-title-tertiary others-heading'>Additional learnings</h1>
      <div className='others-container' id='content-left'>
        <h1 className='project-title-white' id='white-txt-color'>C#</h1>
        <p className='txt-white' id='project-txt-getit'>I learnt about C# in the 
        Data Structure and Algorithm lecture. The lecture was a great introduction 
        to understanding C# programming basics such as OOP (Object Oriented Programming), 
        data structure includes lists, stacks and queues, 
        some basic algorithm of sorting, and software design patterns.</p>
      </div>
      <div className='others-container' id='content-right'>
        <h1 className='project-title-white'>Unit Testing</h1>
        <p className='txt-white'>Testing is an important process for software or 
        web applications. TDD (Test Driven Development) is a preferable approach 
        for application success. 
        I learnt unittest for Python and JEST for React JS. </p>
      </div>
    </section>
  )
}
