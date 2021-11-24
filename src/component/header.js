import React, {useRef, useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import gsap from 'gsap';

const Header = () => 

{
    

    const [HamToggle, setHamToggle] = useState(true);

    // const navlinksToggle = document.querySelectorAll(".ham-button");
    //     navlinksToggle.forEach(e=>
    //         {
    //             e.addEventListener('click', function () {
    //             toggle();});
    //         }); 

    function toggle()
    { 
        
        
        const hamMenu = document.querySelector(".ham-menu-inner");
        const toggleicon = document.querySelector("#toggleicon");
        
        if(HamToggle===true)
            {
                
                toggleicon.classList.remove("fa-bars");
                toggleicon.classList.add("fa-times");
                
                expandMenu();
                setHamToggle(false);
            }

        else
            {
                toggleicon.classList.remove("fa-times");
                toggleicon.classList.add("fa-bars");
                hamMenu.style.transform="translateY(100vh)";
                setHamToggle(true);
            }
    };


    function expandMenu()
    {   
        const hamMenu = document.querySelector(".ham-menu-inner");
        
        hamMenu.style.height="100vh";
        hamMenu.style.width="100%";
        hamMenu.style.background="black";
        hamMenu.style.transform="translateY(0)";
        hamMenu.style.transition="all 0.8s";
        
    };


    let timeline = gsap.timeline();
    let pageItems = useRef(null);
  
    useEffect(() => {


      timeline.from (
        pageItems,
        {
        duration:0.4,
        opacity:0,
        x:35,}
      )
    
    
    },"-=.5")


    return (

        <header className ref={el=>{ pageItems = el }}>
        <div className="logo"><NavLink to="/"><h3>RK</h3></NavLink></div>
        
        <div className="nav-menu">
        <NavLink activeClassName="active-button" to="/about"><button><h1> About</h1></button></NavLink>
        <NavLink activeClassName="active-button" to="/portfolio"><button><h1> Portfolio</h1></button></NavLink>
        <NavLink activeClassName="active-button" to="/contact"><button><h1> Contact</h1></button></NavLink>
        </div>

        <div className="ham-menu">
        <button onClick={toggle} className="togglebtn"><i className="fas fa-bars" id="toggleicon" ></i></button>
        <div className="ham-menu-inner">
        <div className="ham-nav-menu">
        <NavLink activeClassName="ham-active-button" to='/about'><button onClick={toggle} className="ham-button"><h1> About</h1></button></NavLink>
        <NavLink activeClassName="ham-active-button" to='/portfolio'><button onClick={toggle} className="ham-button"><h1> Portfolio</h1></button></NavLink>
        <NavLink activeClassName="ham-active-button" to='/contact'><button onClick={toggle} className="ham-button"><h1> Contact</h1></button></NavLink>
        </div>
        </div>
        </div>

        </header>
    )
}

export default Header;

