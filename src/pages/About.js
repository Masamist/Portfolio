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

const AboutIntroduction = () => {
  return (
    <section className='bg-container-white about-top'>
      <div className='about-container'>
        <h1 className='header-secondary'>Hi there,<br />I am Masami.</h1>
        <p className='txt-primary'>
        I am deeply passionate about <b>Software</b> and <b>Web Development</b>, with a strong interest in crafting 
        seamless and intuitive user experiences through thoughtful <b>UX/UI Design</b>. My journey began with a 
        creative design background, which has evolved into a holistic approach to developing digital
        solutions that are both technically robust and visually engaging.<br /> <br />
        I hold a Bachelor of Applied Information Technology from Whitecliffe, where I gained a solid 
        foundation in <b>full-stack development</b>. Currently, I work as a freelance <b>web developer</b> and 
        <b>UX/UI designer</b>, managing websites for small businesses. I specialise in building and maintaining 
        websites using platforms such as <b>WordPress</b> and <b>Wix</b>, tailoring each site to meet the unique goals 
        of my clients. This includes everything from understanding the business problem and what 
        success looks, creating the layout design and content integration, performance optimisation and 
        ongoing support.<br /><br />
        My long-term career goal is to grow into a <b>Full-Stack Developer</b>, contributing across the entire 
        development process—from ideation and user interface design to server-side development and deployment.
        I bring a broad technical toolkit to the table, which includes <b>React</b>, <b>JavaScript</b>, 
        <b>HTML</b>, <b>CSS</b>, and <b>Tailwind</b> 
        for <b>front-end development</b>, and Django with <b>Python</b> for more advanced <b>front-end</b> logic.<br /><br />
        On the <b>back-end</b>, I work with <b>Node.js</b>, <b>SQL</b>, and <b>MongoDB</b>, allowing me to develop scalable, data-driven 
        applications. This end-to-end capability empowers me to deliver complete and cohesive solutions that are 
        well-integrated and easy to maintain.
        </p>
      </div>
    </section>
  )
}

const Experience = () => {
  return (
    <section className='bg-container-white about-top'>
      <div className='about-container'>
        <div className='about-ex-container'>
          <div>
            <h2 className='about-ex-category'>Career Summary</h2>
          </div>
          <div>
            <h3 className='about-ex-title'>Freelance | Web Developer</h3>
            <p className='about-ex-year-info'>Auckland | 2024 - Now</p>
            <ul className='txt-primary'>
              <li>
                - Designing advertisements, magazines, products, leaflets and company stationery.
              </li>
              <li>- Planning commercials.</li>
              <li>- Including quotes, marketing and sales.</li>
            </ul><br />
            <h3 className='about-ex-title'>Bisco Japan | Graphic Designer</h3>
            <p className='about-ex-year-info'>Tokyo, Japan | Mar 2001 - Jan 2004</p>
            <ul className='txt-primary'>
              <li>- Designing advertisements, magazines, products, leaflets and company stationery.</li>
              <li>- Planning commercials.</li>
              <li>- Including quotes, marketing and sales.</li>
            </ul>
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
            I have recently completed my Bachelor’s studies, which focused on enhancing technical skills 
            in an actual industry environment through internship experience, including advanced 
            programming, interaction design, and web technologies. 
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

const Contact = () => {
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
