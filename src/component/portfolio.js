import React, {useState, useRef, useEffect} from 'react'
import PortfolioApi from './portfolioApi'
import gsap from 'gsap';

const Portfolio = () => {



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




    const [Projects, setProjects] = useState(PortfolioApi)
    return (
        <div ref={el=>{ pageItems = el }} className="portfolio">

            <div className="section-title">
            <h1>Projects.</h1>
            </div>
          
          {Projects.map((e)=>{
              return(
                  
              <div className="project-card mt-5" key={e.id}>
              <div className="project-card-body">
              <div className="project-details">
                  <h1 className="p-3 mt-5">{e.name}</h1>
                  <p className="p-4 mt-2">{e.description}</p>
              <a href={e.siteurl}><button type="button" className="btn-sm px-2">View Project</button></a>
              </div>
                <div className="project-img-div">
                  <img src={e.image} alt="project-img"/>
                  </div>
              </div>
              
             </div>)})}
            
            

        </div>
    )
}

export default Portfolio
