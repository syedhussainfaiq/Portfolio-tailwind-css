import React from "react"
const Skills = () => {
    return (
      <div id= 'skills' className='container pt-32'>
          <div  className='grid md:grid-cols-2 items-center'>
              <div data-aos="zoom-in-down" >
                  <h2 className='text-4xl md:text-5xl' >Technologies I work with</h2>
                  <p className='text-gray-500 pt-2' >
                      I have solid foundation in web development, in HTML, CSS, and typescript.
                      My experience extends to using frameworks like React an Next.js to create
                      dynamic anuser-friendly applications.I'am also proficient in Tailwind Css 
                      for efficent styling and design. With passion for learning, I stay update 
                      on the latest Technologies to enhance my skills set and contribute effectively
                      to projects. 
                  </p>
              </div>
              <div>
                  <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                      <div className='space-y-2'>
                          <h2 data-aos="zoom-in-down">Typescript</h2>
                          <h2 data-aos="zoom-in-down">React.js</h2>
                          <h2 data-aos="zoom-in-down" >Next.js</h2>
                      </div>
                      <div className='space-y-2'>
                          <h2 data-aos="zoom-in-down">Tailwind</h2>
                          <h2 data-aos="zoom-in-down">CSS</h2>
                          <h2 data-aos="zoom-in-down">Node.js</h2>
                      </div>
                  </div>
              </div>
          </div>
        
      </div>
    )
  }
  
  export default Skills