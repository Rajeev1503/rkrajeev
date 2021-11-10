import React, {useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import me from './me2.jpeg'
const About = () => {


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
  
  
  },"-=.5")



    return (

      <div ref={el=>{ pageItems = el }} className="about">
        

<div className="col-one">
          <div className="section-title">
            <h1>About me.</h1>
        </div>
      <div className="about-me">
        <div className="details">
        <p className="about-para">Hello, My name is <b className="rajeev">Rajeev Kumar</b>, 
        computer science engineer with skills in Front-End Web Development and have 
        almost 1 year of experience with almost 20+ projects completed on different platforms.</p>
        <p className="email">Email: <span>rk.rajeevkr1503@gmail.com</span></p>
          <p className="social">On The Internet: <i className="fab fa-twitter"></i> &nbsp;<i className="fab fa-linkedin"></i></p></div>
        <img src={me} alt="me"/>
        </div>
        </div>


<div className="col-two">
      <div className="section-title">
          <h1>Skills.</h1>
      </div>
        
{/*---------------------- card-component------------ */}
<div className="about-flex-div">
        
        <div className="about-card-div d-flex flex-row flex-wrap">
          
          {/*---- -Front-end development----- */}
            <div className="about-card shadow">
              <div className="about-cards-body">
              <i className="fas fa-code fa-2x" ></i>
                <p className="cards-text mt-4 fw-bold">I code to bring ideas to life in browser.</p>
                <div className=" card-lists mt-5">
                <h4 className="sub-title mt-5" >Languages I use:</h4>
                <h5 className="">HTML</h5>
                <h5 className="">CSS</h5>
                <h5 className="">JavaScript</h5>
                <h5 className="">ReactJs</h5>
                <h4 className="sub-title mt-4" >Dev Tools:</h4>
                <h5 className="">Bootstrap</h5>
                <h5 className="">Tailwind</h5>
                <h5 className="">Github</h5>
                <h5 className="">Terminal</h5>
                </div>
              </div>
             </div>


             {/* ----designing---- */}

             <div className="about-card shadow">
              <div className="about-cards-body">
              <i className="fas fa-palette fa-2x"></i><i class="fas fa-paint-brush"></i>
                {/* <h3 className="cards-title fs-1">UI <br/> Design</h3> */}
                <p className="cards-text mt-4 fw-bold">I like to keep my design minimalistic.</p>
                <div className="card-lists mt-5">
                <h3 className="sub-title mt-5" >Things I design:</h3>
                <h5 className="">UI</h5>
                <h5 className="">UX</h5>
                <h5 className="">Logo Design</h5>
                <h5 className="">Web Apps</h5>
                <h4 className="sub-title mt-4" >Tools I use:</h4>
                <h5 className="">Figma</h5>
                <h5 className="">Canva</h5>
                <h5 className="">WebFlow</h5>
                <h5 className="">Photoshop</h5>
                </div>
              </div>
             </div>
</div>

{/* ----------------------- progress bar--------------------------- */}
        
          <div className="progress-div mt-2">
            <div className="progress-inner-div">
             <div className="skill-name"><div className="lang">HTML5 &nbsp;<i className="fab fa-html5 fa-1x"></i></div> <div className="progress">
                <div className="progress-bar bar1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div></div>
             <div className="skill-name "><div className="lang">CSS3 &nbsp;<i className="fab fa-css3 fa-1x"></i></div><div className="progress">
                <div className="progress-bar bar2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div></div>
             <div className="skill-name "><div className="lang">JAVASCRIPT &nbsp;<i className="fab fa-js fa-1x"></i></div><div className="progress">
                <div className="progress-bar bar3" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

                </div>
              </div></div>
             <div className="skill-name "><div className="lang">REACT JS &nbsp;<i className="fab fa-react fa-1x"></i></div><div className="progress">
                <div className="progress-bar bar4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div></div>
              </div>
            </div>
            
            </div>
            </div>
          

            <div id="cta-div" className="py-5">
                <p className="">NEED A WEB DEVELOPER ?</p>
                <h1><NavLink to="/contact">Let's Work Together <i className="fas fa-arrow-right"></i></NavLink></h1>
             </div>
        </div>
    )
}

export default About
