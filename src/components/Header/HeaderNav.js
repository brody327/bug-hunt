//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

//--- Media ---
import logo from '../../images/logo4.png'

//--- CSS ---
import './Header.css'

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const HeaderNav = () => {
    //--- JSX ---
    return (
        <Navbar collapseOnSelect expand='md'>
            <Navbar.Brand href='#home'>
                <Image className='logo' src={logo} fluid />
                Bug Hunter
            </Navbar.Brand>
            <NavbarToggle aria-controls='responsive-navbar' />
            <NavbarCollapse id='responsive-navbar'>
                <Nav className='mr-auto'>
                    <NavLink href='#home'>Home</NavLink>
                    <NavLink>My Projects</NavLink>
                    <NavLink>My Bugs</NavLink>
                    <NavLink>My Account</NavLink>
                </Nav>
                <Nav>
                    <NavLink>Login</NavLink>
                    <NavLink>Register</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default HeaderNav;