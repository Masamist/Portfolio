import  { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from "react-overlays/Modal"
import emailjs from '@emailjs/browser';
// style
import './About.css'

export default function About() {
  return (
    <>
      <AboutIntroduction />
      <Experience />
      <Contact />
    </>
  )
}

function AboutIntroduction() {
  return (
    <section className='about-top'>
      <div className='about-container'>
        <h1 className='about-top-title'>Hi there,<br />I am Masami.</h1>
        <p className='about-top-txt'>
        I have recently completed a diploma in Software Development and am currently studying 
        the Batchelor of Applied Information Technology at Whitecliffe which I will have completed 
        studying by the end of 2023, 
        focusing on building my career as a Full-Stack developer.</p>
        <p className='about-top-txt'>
        My skills are React, HTML, CSS, Bootstrap, Django as Front-end and Node, Mongo DB, 
        SQL, Firebase as Back-end, also JavaScript, Python and C#. I also have background in design, 
        I was a graphic designer which I leverage for UX and UI design my skills are Figma, 
        Adobe Illustrator and Photoshop. I effectively contribute to an agile team environment with 
        my agile project management skills. 
        </p>
        <p className='about-top-txt'>
          I love creative work designing and coding, collaborating with customers and users enabling 
          them to succeed.  I am looking forward to diving into a new project and working with new people.
        </p>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className='about-top'>
      <div className='about-ex-wrap'>
        <div className='about-ex-container' id='about-ex-container-gap'>
          <div>
            <h2 className='about-ex-category'>Career Summary</h2>
          </div>
          <div>
            <h3 className='about-ex-title'>Bisco Japan | Graphic Designer</h3>
            <p className='about-ex-year-info'>Tokyo, Japan | Mar 2001 - Jan 2004</p>
            <p className='about-ex-txt'>
              Designing advertisements, magazines, products, leaflets and company stationery. 
              Planning commercials including quotes, marketing and sales.
            </p>
          </div>
        </div>
        <div className='about-ex-container'>
          <div>
            <h2 className='about-ex-category'>Education</h2>
          </div>
          <div>
            <h3 className='about-ex-title'>Diploma in Software Development (NZQA Level6)</h3>
            <p className='about-ex-year-info'>Whitecliffe | Auckland | Feb 2022 - Apr 2023</p>
            <p className='about-ex-txt'>
              This program covers a wide area of knowledge in application development, 
              web, mobile and game development. Some of these lectures are interacting 
              with other students in agile project teams representing multiple roles 
              such as scrum master, tester, BA and finance. 
            </p>

            <h3 className='about-ex-title'>Diploma in Web Development and Design (NZQA Level 5)</h3>
            <p className='about-ex-year-info'>Whitecliffe | Auckland | Jun 2021 - Dec 2021</p>
            <p className='about-ex-txt'>
              This diploma course builds skills for the entire web development 
              process using a content management system as the back end including 
              testing and  business analysis perspective. 
            </p>

            <h3 className='about-ex-title'>Certificate in Information Technology (NZQA Level 5)</h3>
            <p className='about-ex-year-info'>Whitecliffe | Auckland | Feb 2021 - Jun 2021</p>
            <p className='about-ex-txt'>
            This program is designed to introduce the role of information technology, 
            introducing the concept of hardware, 
            software, programming with practical tasks to achieve a solid foundation.  
            </p>

            <h3 className='about-ex-title'>Web Design and Programming Course</h3>
            <p className='about-ex-year-info'>Multimedia School Wave | Tokyo, Japan</p>
            <p className='about-ex-txt'>
            Three-month course to achieve fundamental front-end skills for web design 
            and development with HTML, CSS and JavaScript 
            </p>

            <h3 className='about-ex-title'>Visual Art Design Course</h3>
            <p className='about-ex-year-info'>Mac Design Academy  | Tokyo, Japan</p>
            <p className='about-ex-txt'>
            A one-year course that focuses on visual art software skills on Mac. 
            Such as Illustrator, Photoshop, Shade and QuarkXPress. 
            </p>

            <h3 className='about-ex-title'>Associate Degree in Graphic Design</h3>
            <p className='about-ex-year-info'>Joshibi Junior College of Art and Design | Tokyo, Japan</p>
            <p className='about-ex-txt'>
            A two-year course for achieving visual expression and 
            communication with design knowledge. 
            </p>
          </div>
        </div>        
      </div> 
    </section>
  )
}

function Contact() {
  // Modal
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const renderBackdrop = (props) => <div className="backdrop" {...props} />

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u9hskvs', 'template_o3am5bl', form.current, 'hF_d4SsKrqGQ5h0Hb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
  }

  // npm i @emailjs/browser

  return (
    <section className='about-top' id='contact-bg-color'>
      <div className='contact-container'>
        <h1 className='contact-title'>I’d love to hear from you!</h1>
        <p className='contact-txt'>Share your thoughts, please send me a message.<br />
           I will reply back to you soon.
        </p>
        <div className='form-container'></div>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <h2 className='contact-form-title'>Contact Me</h2>
          <input type='text' placeholder='Name' name='user_name' />
          <input type='email' placeholder='Email Address' name='user_email' />
          <textarea placeholder='Message' name='message' />
          <button className='about-btn' type='submit' value='Send' onClick={() => setShowModal(true)}>Submit</button>
        </form>
        <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
        >
          <div>
            <div className="modal-header">
              <div className="modal-title">
                <h3>Message:</h3></div>
              <div>
                <span className="close-button" onClick={handleClose}>
                  x
                </span>
              </div>
            </div>
            <div className="modal-desc">
              <h3>The message has been sent. Thank you.</h3>
                <Link to="/"><button id="btn-contact">Go to Home</button></Link>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}
