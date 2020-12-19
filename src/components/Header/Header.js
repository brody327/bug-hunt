//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';

//--- Components ---
import { HeaderNav } from './index';

//--- CSS ---
import '../../styles/components/Header.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const Header = ({ currentUser, setCurrentUser }) => {
	//--- JSX ---
	return (
		<Container id='header' className='background-primary' fluid>
			<HeaderNav currentUser={currentUser} setCurrentUser={setCurrentUser} />
		</Container>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Header;
