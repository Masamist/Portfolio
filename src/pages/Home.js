import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring, config } from 'react-spring'

// style
import '../scss/Home.scss'

// images
import portrait from '../assets/portrait.png'
import introimage from '../assets/intro-image.webp'
import kpc from '../assets/kpc.png'
import schoolkitchen from '../assets/home_school_kitchen.png'
import ticketingsystem from '../assets/ticketing_system.png'

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

const HomeTop = () => {
  const [on, toggle] = useState(false)
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0, 0, 0)' : 'translate3d(50%, 0, 0)',
    config: config.slow
  })
  return (
    <section className='home-top'>
      <div>
        <h1 className='home-top-title'>Hi, I am Masami.<br />
          Software Developer<br />
          and Designer</h1>
      </div>
      <Waypoint onEnter={() => toggle(true)} />
      <animated.div className='home-top-container' style={animation}>
        <img src={portrait} alt='portrait' />
      </animated.div>
    </section>
  )
}

const Introduction = () => {
  const [visible, toggle] = useState(false)
  const styles = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 24,
    config: config.slow
  })
  
  return (
    <section className='bg-container-primary'>
      <Waypoint
        bottomOffset="50%" 
        onEnter={() => toggle(true)} 
        />
        <animated.div className='inner-container' style={styles}>
          <div className='intro-img-container'>
            <img className='intro-img' src={introimage} alt='introduction images' />
          </div>
        
          <div>
            <h2 className='home-intro-header'>
              My passion is Web Development <br />
              and UX UI Design
            </h2>
            <p className='txt-white'>I completed a Bachelor of Applied Information Technology 
              at Whitecliffe College and excited to build a career as a Full-Stack developer.<br />
              My skills are React, JavaScript, HTML, CSS, Tailwind, Django Framework with Python 
              for front-end, and Node, SQL and MongoDB for back-end, also I am an experienced designer.  
              I enjoy applying my skills and creativity on new projects.</p><br />
              <Link to="/about">
                <button className='btn-primary'>About Me</button>
              </Link>
          </div>
        </animated.div> 
              
      </section>
  )
}

const Projects = () => {
  return (
    <section className='home-project-container'>
      <div className='home-top-flex-col'>
        <div className='home-project-header-container'>
          <h1 className='home-project-header'>Projects</h1>
        </div>    
        <div className='home-project-txt-container'> 
          <p className='txt-primary'>I developed a strong foundation in software development, 
            including Agile project management, multiple programming languages, and application development. 
            Through my studies, I learned how to effectively resolve technical issues and 
            deliver user-centered solutions. During my Bachelor’s degree at Whitecliffe, 
            I worked on various projects, including projects with real clients.</p>
        </div>  
      </div>

      <div className='home-three-project-container'>
        <div>
          <Link to="/smahh">
          <img src={ticketingsystem} alt='Get IT Python' />
          <h3>Smahh Business Solution</h3>
          </Link>
          <p>The project was part of my industrial placement for my Bachelor's degree, 
            where I addressed a business problem for Smahh, a cybersecurity company, 
            by developing an online ticketing system and redesigning their website.</p>
        </div>
        <div>
          <Link to="/school-kitchen">
            <img src={schoolkitchen} alt='School Kitchen' />
            <h3>School Kitchen</h3>
          </Link>
          <p>This mobile application project is a school lunch ordering system designed to 
            help busy parents easily order lunches for their children. 
            The solution was developed by combining two key areas: 
            interactive design and web technologies, utilising React Native.</p>
        </div>
        <div>
          <Link to="/kpc-project">
            <img src={kpc} alt='Kauri Point Construction' />
            <h3>Kauri Point Construction</h3>
          </Link>
            <p>A team project in which we developed a web application for Kauri Point Construction 
              to manage their business operations. Additionally, we recreated and improved their website, 
              which is now deployed and actively used by the client.</p>
        </div>
      </div>
      <div className='btn-container'>
        <Link to="/projects">
          <button className='btn-tertiary'>
            See Details and More Projects
          </button>
        </Link>
      </div>
    </section>
  )
}

const Challenge = () => {
  return (
    <section className='bg-container-secondary' id="callenge-container-padding">
      <h1 className='header-white'>I love the challenge of finding a solution.</h1>
      <div className='challenge-txt-container'>
        <p className='txt-white'>I completed the Bachelor's degree
          and I felt “I want to make more web apps!”. 
          I really like creative work including design and coding. 
          While I am coding, bugs can be frustrating though 
          rewarding once I the find the solution. 
          I am excited to commence new projects and collaborate in a team.
        </p>
      </div>       
      <div className='btn-container'>
        <Link to="/about">
          <button className='btn-secondary'>About Me</button>  
        </Link> 
      </div>
    </section>
  )
}
