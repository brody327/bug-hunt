//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { useHistory, Link } from 'react-router-dom';

//--- Bootstrap ---
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Image from 'react-bootstrap/Image';

//--- Media ---
import logo from '../../images/logo4.png';

//--- CSS ---
import '../../styles/typography.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const HeaderNav = ({ currentUser, setCurrentUser }) => {
	//--- State ---

	//--- Functions ---
	//TODO: Create logout function/button if logged in.

	let history = useHistory();
	//--- JSX ---
	return (
		<Navbar collapseOnSelect expand='lg'>
			<Link to='/'>
				<Navbar.Brand className='font-head font-brand'>
					<Image className='logo pulse-in' src={logo} fluid />
					BUG HUNT
				</Navbar.Brand>
			</Link>
			<NavbarToggle aria-controls='responsive-navbar' />
			<NavbarCollapse className='font-sub-head font-nav' id='responsive-navbar'>
				<Nav className='mr-auto'>
					<NavLink onClick={() => history.push('/')}>Home</NavLink>
					<NavLink onClick={() => history.push('/projects')}>
						My Projects
					</NavLink>
					<NavLink onClick={() => history.push('/bugs')}>My Bugs</NavLink>
				</Nav>
				<Nav>
					{currentUser != null ? (
						<>
							<NavLink onClick={() => history.push('/account')}>
								My Account
							</NavLink>
							<NavLink
								onClick={() => {
									localStorage.clear();
									setCurrentUser(null);
									history.push('/');
									window.location.reload();
								}}
							>
								Logout
							</NavLink>
						</>
					) : (
						<>
							<NavLink onClick={() => history.push('/login')}>Login</NavLink>
							<NavLink onClick={() => history.push('/register')}>
								Register
							</NavLink>
						</>
					)}
					<NavLink onClick={() => history.push('/register/error')}>404</NavLink>
				</Nav>
			</NavbarCollapse>
		</Navbar>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default HeaderNav;
