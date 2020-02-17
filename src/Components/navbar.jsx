import React, { Component } from 'react';

//Stateless functional component, shortcut = sfc
const Navbar = () =>{
    return ( 
        <nav className = "navbar navbar-light bg-light">
            <a className = "navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
        </nav>
     );

    }
export default Navbar;