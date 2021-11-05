import React, {useState} from 'react'

import PortfolioApi from './portfolioApi'
const Portfolio = () => {

    const [Projects, setProjects] = useState(PortfolioApi)
    return (
        <div className="portfolio">

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
              <a href="/contact"><button type="button" className="btn btn-sm px-2">View Project</button></a>
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
