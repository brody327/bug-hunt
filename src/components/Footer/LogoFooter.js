//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

//--- Components ---

//--- Media ---
import logo from '../../images/logo4.png';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const LogoFooter = () => {
	//--- JSX ---
	return (
		<Container id='logo-footer' fluid>
			<Row>
				<Col>
					<Image className='logo mx-auto' src={logo} />
				</Col>
			</Row>
			<Row id='privacy-terms' className='justify-content-md-center'>
				<a href='https://google.com'>
					<p id='privacy'>Privacy Policy</p>
				</a>
				<a href='https://google.com'>
					<p id='terms'>Terms of Use</p>
				</a>
			</Row>
		</Container>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default LogoFooter;
