
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
        I graduated Software Development at Whitecliffe and focused 
        on building my career as a Full-Stack developer. </p>
        <p className='about-top-txt'>
        My skills are React, HTML, CSS, Bootstrap, Django as Front-end and Node, 
        Mongo DB, SQL, Firebase as Back-end, also JavaScript, Python and C#. 
        I also have background in design, I was a graphic designer which I leverage for UX and UI design my skills here are Figma, Adobe Illustrator and Photoshop. I effectively contribute to an agile team environment with my agile project management skills. 
        </p>
        <p className='about-top-txt'>
        I love creative work designing and coding an application. 
        I am looking forward to diving into a new project and working with new people.</p>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className='about-top'>
      <div className='about-ex-wrap'>
        <div className='about-ex-container'>
          <div>
            <h2 className='about-ex-category'>Career Summary</h2>
          </div>
          <div>
            <h3 className='about-ex-title'>Bisco Japan | Graphic Designer</h3>
            <p className='about-ex-year-info'>Tokyo, Japan | Mar 2001 - Jan 2004</p>
            <ul>
              <li>
                - Designing advertisements, magazines, products, leaflets and company stationery.
              </li>
              <li>
                - Planning commercials.
              </li>
              <li>
                - Including quotes, marketing and sales.
              </li>
            </ul>
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
        <div>
          <a href='https://www.kauripointconstruction.co.nz/'>
            <button className='about-cv-button' id='right'>Open CV PDF</button>
          </a>
        </div> 
        
      </div> 
    </section>
  )
}

function Contact() {
  return (
    <section className='about-top' id='contact-bg-color'>
      <div className='about-container'>
        <h1 className='contact-title'>I’d love to hear from you!</h1>
        <p className='contact-txt'>If you have anything to share your though or offer,<br />
          please send me a message. I will replay you soon.
        </p>
        <form className='form'>
          <h2 className='contact-form-title'>Contact Me</h2>
          <input type='text' placeholder='name'></input>
          <input type='email' placeholder='Email Address'></input>
          <textarea placeholder='Message'></textarea>
          <button className='about-cv-button'>Submit</button>
        </form>

        </div>
    </section>
  )
}


