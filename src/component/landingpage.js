import React from 'react'
import { NavLink } from 'react-router-dom'



const LandingPage = () => {


  return (

      <div className="landing-page ">
          
          <div className="landing-div">
              

            <div className="mt-5 d-flex flex-column flex-wrap">
              <div className="landing-name-div mt-5">
                <h1 className="hello">hello</h1>
                <h4 className="landing-title">Front-end &amp; UI <span className="landing-title-span">Developer</span></h4>
                {/* <p className="">|Web and UI Developer|</p> */}
                   {/* <p className="landing-about">computer science engineer with skills in Front-End Web Development and User Interface Designing.</p> */}
              </div> 
              <div className="landing-buttons mt-5 d-flex flex-column flex-wrap gap-4"> 
            <NavLink to="/contact">  <button type="button" className="btn btn-primary btn-lg px-4">Hire Me  &nbsp;<i className="fas fa-thumbs-up"></i></button></NavLink>
              </div>

            </div>
            
            </div>
            
      </div>

    )


    
}

export default LandingPage
