import React, {useRef, useEffect} from 'react'
import upwork from './upwork.png';
import fiverr from './fiverr.png';
import freelancer from './freelancer.png';
import gsap from 'gsap';
const Contact = () => {



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
  
  
  })


    return (
        <div ref={el=>{ pageItems = el }} className="contact">

            <div className="section-title">
            <h1>Get In Touch.</h1>
            </div>
              <div className="sites">
                <a href='https://www.fiverr.com/rajeevkr1503'><img src={fiverr}></img></a>
                <a href='https://www.freelancer.in/u/rkrajeevkr1503'><img className="freelancer" src={freelancer}></img></a>
                <a href='https://www.upwork.com/freelancers/~01921b290e59a610f2'><img src={upwork}></img></a>
              </div>

        <div className="contact-inner-div">
              
          <div className="query-section">
              <h3 className="mt-5"><i className="fas fa-envelope"></i> &nbsp; Any query, Please write below</h3>
              <p>(*not working)</p>
            <div className="form-div mb-3 my-5">
              <input type="email" className="form-control mt-2 mb-3" id="exampleFormControlInput1" placeholder="Your Name"/>
              <input type="email" className="form-control mt-2 mb-3" id="exampleFormControlInput1" placeholder="Your Email (name@example.com)"/>
            </div>
            <div className="mb-3">
              <textarea className="form-control " id="exampleFormControlTextarea1" rows="6" placeholder="Your Query"></textarea>
            </div>
            <a href="/aa"><button className="btn-lg px-4 mb-5 mt-4">Submit</button></a>
            </div>
            </div>
            
       </div>
    )
}

export default Contact
