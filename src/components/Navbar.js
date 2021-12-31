import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import {  Link, useHistory } from "react-router-dom";
import { Button } from "./Button"
import './Navbar.css'
import brain1 from "./brain1.jpeg";
import brain2 from "./brain2.jpeg";
import brain3 from "./brain3.jpeg";
import brain4 from "./brain4.jpeg";


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
   

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img className="navbar-logo-img" src={brain1} />Brain Developer</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
                {/* <Button onClick={this.handleSignUp} >Sign Up</Button> */}
                
            </nav>
        )
    }
}

export default Navbar