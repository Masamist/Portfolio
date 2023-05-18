// style
import './Home.css'

// images
import portrait from '../assets/portrait.png'
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
      <h1>Hi, I am Masami.<br />
        Software Developer<br />
        and Designer</h1>
      <img src={portrait} alt='portrait' />
    </section>
  )
}

function Introduction() {
  return (
    <section className='home-introduction'>
          <div>
            <p>image</p>
          </div>
          <div>
            <h2 class='introduction-header'>My passion is in Web Development and UX UI Design</h2>
            <p class='introduction-p'>I am a graduate of the Software Development course at Whitecliffe College and excited to build a career as a Full-Stack developer.
              My skills are React, JavaScript, HTML, CSS, Bootstrap, Django Framework with Python as a front-end, and Node, SQL and MongoDB as back-end. I am also an experienced designer.  
              I am excited to apply my skills and creativity on new projects.</p>
            <button className='btn-white'>About Me</button>
          </div>      
      </section>
  )
}

function Projects() {
  return (
    <section className='home-project'>
      <div className='container'>
          <h1 className='home-project-title'>Project</h1>

        <p className='home-project-txt'>I have learned software development skills such as Agile projects, 
          many programming languages, coding, how to approach and resolve issues. 
          These are some of my projects that I completed while studying Software Development at Whitecliffe. </p>
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
            <p>Group work for the final project in the Software Development course. 
              The goal was to create a construction website including a project management app. 
              The website is deployed and used by the client.</p>
          </div>
          <div>
            <img src={happychick} alt='Happy Chick Game' />
            <h3>Happy Chick</h3>
            <p>Group work for the final project in the Software Development course. 
              The goal was to create a construction website including a project management app. 
              The website is deployed and used by the client.</p>
          </div>
        </div>

        <button className='btn-yellow'>More Projects</button>
      </div>
    </section>
  )
}

function Challenge() {
  return (
    <section className='home-challenge'>
      <div className='container'>
      <h1 className='challenge-title'>I love the challenge of finding a solution.</h1>
        <p className='challenge-txt'>I have graduated in Software Development
           and I felt “I want to make more web apps!”. 
           I really like creative work including design and coding. 
           While I am coding, bugs can be frustrating though 
           rewarding once I the find the solution. 
           I am excited to commence new projects and collaborate in a team.
        </p>
      <button className='btn-white'>About Me</button>  
      </div>
    </section>
  )
}
