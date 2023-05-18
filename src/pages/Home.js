import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <h1>Hi, I am Masami.<br />
        Software Developer<br />
        and Designer</h1>
      <p>Photo</p>
      <section className='home-introduction'>
        <h2 class='section-header'>My passion is in Web Development and UX UI Design</h2>
        <p>I am a graduate of the Software Development course at Whitecliffe College and excited to build a career as a Full-Stack developer.
          My skills are React, JavaScript, HTML, CSS, Bootstrap, Django Framework with Python as a front-end, and Node, SQL and MongoDB as back-end. I am also an experienced designer.  
          I am excited to apply my skills and creativity on new projects.</p>
        <button className='btn-blue'>About Me</button>
      </section>
      <section className='home-project'>
        <h1>Project</h1>
        <p>I have learned software development skills such as Agile projects, 
          many programming languages, coding, how to approach and resolve issues. 
          These are some of my projects that I completed while studying Software Development at Whitecliffe. </p>
        
      </section>
    </div>

  )
}
