import React from 'react'
import {NavLink } from 'react-router-dom'
const Header = () => {
    return (

        <header>
        <div className="logo"><NavLink to="/"><h3>RK</h3></NavLink></div>
        
        <div className="nav-menu">
        <NavLink activeClassName="active-button" to="/about"><button><h1> About</h1></button></NavLink>
        <NavLink activeClassName="active-button" to="/portfolio"><button><h1> Portfolio</h1></button></NavLink>
        <NavLink activeClassName="active-button" to="/contact"><button><h1> Contact</h1></button></NavLink>
        </div>
        </header>
    )
}

export default Header;

