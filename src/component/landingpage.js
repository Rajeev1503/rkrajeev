import React, {useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';


const LandingPage = () => {

  let timeline = gsap.timeline();
  let pageItems = useRef(null);


useEffect(() => {
  
  timeline.to (
    pageItems,
    { 
      duration:0.4,
      opacity:1,
      y:-35,}
  )
});


    

  return (    
    
      <div ref={el=>{ pageItems = el }} className="landing-page ">
          
          <div className="landing-div">
            <div className="d-flex flex-column flex-wrap">
              <div className="landing-name-div">
                <h1 className="hello">hello.</h1>
                <h4 className="landing-title">Front-end &amp; UI <span className="landing-title-span">Developer</span></h4>
                   <p className="landing-about mt-4">"I express my creativity through code"</p>
              </div> 
              <div className="landing-buttons mt-3 d-flex flex-column flex-wrap gap-4"> 
            <NavLink to="/contact">  <button type="button" className="btn-lg px-4">Hire Me  &nbsp;<i className="fas fa-thumbs-up"></i></button></NavLink>
              </div>

            </div>
            
            </div>
      </div>

    )

    
    
}

export default LandingPage
