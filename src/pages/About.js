import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from "react-overlays/Modal"
import emailjs from '@emailjs/browser';
// style
import '../scss/About.scss'

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
    <section className='bg-container-white about-top'>
      <div className='about-container'>
        <h1 className='header-secondary'>Hi there,<br />I am Masami.</h1>
        <p className='txt-primary'>
        I have recently completed a diploma in Software Development and am currently studying 
        the Batchelor of Applied Information Technology at Whitecliffe which I will have completed 
        studying by the end of 2023, 
        focusing on building my career as a Full-Stack developer.<br /><br />
        My skills are React, HTML, CSS, Bootstrap, Django as Front-end and Node, Mongo DB, 
        SQL, Firebase as Back-end, also JavaScript, Python and C#. I also have background in design, 
        I was a graphic designer which I leverage for UX and UI design my skills are Figma, 
        Adobe Illustrator and Photoshop. I effectively contribute to an agile team environment with 
        my agile project management skills.<br /><br />
          I love creative work designing and coding, collaborating with customers and users enabling 
          them to succeed.  I am looking forward to diving into a new project and working with new people.
        </p>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className='bg-container-white about-top'>
      <div className='about-container'>
        <div className='about-ex-container'>
          <div>
            <h2 className='about-ex-category'>Career Summary</h2>
          </div>
          <div>
            <h3 className='about-ex-title'>Bisco Japan | Graphic Designer</h3>
            <p className='about-ex-year-info'>Tokyo, Japan | Mar 2001 - Jan 2004</p>
            <p className='txt-primary'>
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
          <h3 className='about-ex-title'>Batchelor of Applied Information Technology (NZQA Level 7)</h3>
            <p className='about-ex-year-info'>Whitecliffe | Auckland | Jul 2023 - Jun 2024</p>
            <p className='txt-primary'>
            I am currently completing my Batchelor study at campus which ends in December, 
            then industry placement from January, which will be completed by June 2024. 
            This program focuses on increasing technical skill to an industry ready level 
            including Advanced Programming, Interaction Design and Web Technologies.  
            </p><br /><br />

            <h3 className='about-ex-title'>Diploma in Software Development (NZQA Level6)</h3>
            <p className='about-ex-year-info'>Whitecliffe | Auckland | Feb 2022 - Apr 2023</p>
            <p className='txt-primary'>
              This program covers a wide area of knowledge in application development, 
              web, mobile and game development. Some of these lectures are interacting 
              with other students in agile project teams representing multiple roles 
              such as scrum master, tester, BA and finance. 
            </p><br /><br />

            <h3 className='about-ex-title'>Diploma in Web Development and Design (NZQA Level 5)</h3>
            <p className='about-ex-year-info'>Whitecliffe | Auckland | Jun 2021 - Dec 2021</p>
            <p className='txt-primary'>
              This diploma course builds skills for the entire web development 
              process using a content management system as the back end including 
              testing and  business analysis perspective. 
            </p><br /><br />

            <h3 className='about-ex-title'>Certificate in Information Technology (NZQA Level 5)</h3>
            <p className='about-ex-year-info'>Whitecliffe | Auckland | Feb 2021 - Jun 2021</p>
            <p className='txt-primary'>
            This program is designed to introduce the role of information technology, 
            introducing the concept of hardware, 
            software, programming with practical tasks to achieve a solid foundation.  
            </p><br /><br />

            <h3 className='about-ex-title'>Web Design and Programming Course</h3>
            <p className='about-ex-year-info'>Multimedia School Wave | Tokyo, Japan</p>
            <p className='txt-primary'>
            Three-month course to achieve fundamental front-end skills for web design 
            and development with HTML, CSS and JavaScript 
            </p><br /><br />

            <h3 className='about-ex-title'>Visual Art Design Course</h3>
            <p className='about-ex-year-info'>Mac Design Academy  | Tokyo, Japan</p>
            <p className='txt-primary'>
            A one-year course that focuses on visual art software skills on Mac. 
            Such as Illustrator, Photoshop, Shade and QuarkXPress. 
            </p><br /><br />

            <h3 className='about-ex-title'>Associate Degree in Graphic Design</h3>
            <p className='about-ex-year-info'>Joshibi Junior College of Art and Design | Tokyo, Japan</p>
            <p className='txt-primary'>
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
  // emailjs package installed
  // npm i @emailjs/browser
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

  return (
    <section className='bg-container-secondary about-top'>
      <div className='about-container'>
        <h1 className='header-white'>I’d love to hear <br />from you!</h1>
        <p className='txt-white txt-center'>Share your thoughts, please send me a message.<br />
           I will reply back to you soon.
        </p>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <h2 className='contact-form-title'>Contact Me</h2>
          <input type='text' placeholder='Name' name='user_name' required />
          <input type='email' placeholder='Email Address' name='user_email' required />
          <textarea placeholder='Message' name='message' required />
          <div className='btn-container'>
            <button className='btn-secondaryfill' type='submit' value='Send' onClick={() => setShowModal(true)}>Submit</button>
          </div>   
        </form>
        <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
        >
          <div>
            <div className="modal-header">
              <h3 className="modal-title">Message:</h3>
              <div>
                <span className="close-button" onClick={handleClose}>
                  x
                </span>
              </div>
            </div>
            <div className="modal-desc">
              <p>The message has been sent. Thank you.</p>
              <div className='btn-container'>
                <Link to="/">
                  <button className="btn-primary btn-modal-mt">Go to Home</button>
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}
