import { Link } from 'react-router-dom'

// style
import './Home.css'

// images
import portrait from '../assets/portrait.png'
import introimage from '../assets/intro-image.webp'
import kpc from '../assets/kpc.png'
import getitpython from '../assets/get_it_python.png'
import happychick from '../assets/happy_chick.png'



export default function Home() {
  return (
    <>
      <HomeTop />
      <Introduction />
      <Projects />
      <Challenge />
    </>
  )
}

function HomeTop() {
  return (
    <section className='home-top'>
      <div className='home-top-container'>
        <h1 className='home-top-title'>Hi, I am Masami.<br />
          Software Developer<br />
          and Designer</h1>
      </div>
      <div className='home-top-container'>
        <img src={portrait} alt='portrait' />
      </div>
    </section>
  )
}

function Introduction() {
  return (
    <section className='home-intro'>
        <div className='home-intro-container'>
          <div className='intro-img-container'>
            <img className='intro-img' src={introimage} alt='introduction images' />
          </div>
        
          <div>
            <h2 class='intro-header'>
              My passion is in Web Development <br />
              and UX UI Design
            </h2>
            <p class='intro-p'>I am a graduate of the Software Development course at Whitecliffe College and excited to build a career as a Full-Stack developer.
              My skills are React, JavaScript, HTML, CSS, Bootstrap, Django Framework with Python as a front-end, and Node, SQL and MongoDB as back-end. I am also an experienced designer.  
              I am excited to apply my skills and creativity on new projects.</p>
            <button className='btn-white' id='challenge-btn'>About Me</button>
          </div>
        </div> 
              
      </section>
  )
}

function Projects() {
  return (
    <section className='home-project'>
      <div className='container'>
          <div>
            <h1 className='home-project-title'>Projects</h1>
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
              <p>This project had 2 aspects, one is an agile project 
                management, that is how the project management with 
                scrum and the other is to build a secure web service 
                for users to learn Python and other programming 
                languages.</p>
            </div>
            <div>
              <img src={happychick} alt='Happy Chick Game' />
              <h3>Happy Chick</h3>
              <p>2D side scroll platform made with Godot Game Engine 
                to be enjoyed by children through to adults. I planned 
                the game story, character setting, music selection 
                and built the game. This game was popular when 
                demonstrated at school events and an learning institution
                 industry  expo.</p>
            </div>
          </div>
          <div className='home-project-btn-container'>
            <Link to="/products" className='home-project-btn-link'>
              <button className='btn-yellow' id='home-game-btn'>
                More Projects
              </button>
            </Link>
          </div>
      </div>
    </section>
  )
}

function Challenge() {
  return (
    <section className='home-challenge'>
      <div className='container'>
          <h1 className='challenge-title'>I love the challenge of<br />
            finding a solution.</h1>
          <p className='challenge-txt'>I have graduated in Software Development
            and I felt “I want to make more web apps!”. 
            I really like creative work including design and coding. 
            While I am coding, bugs can be frustrating though 
            rewarding once I the find the solution. 
            I am excited to commence new projects and collaborate in a team.
          </p>
        <button className='btn-white' id='challenge-btn'>About Me</button>  
      </div>
    </section>
  )
}
