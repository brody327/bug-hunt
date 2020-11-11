//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//--- Components ---
import { SocialLinks, LegalDocs, LogoFooter } from './index';

//--- Media ---

//--- CSS ---
import '../../styles/components/Footer.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const Footer = () => {
	//--- JSX ---
	return (
		<Container id='footer' className='background-neutral' fluid>
			<Row className='text-center'>
				<Col md={4} className='my-auto'>
					<LegalDocs />
				</Col>
				<Col md={4} className='my-auto'>
					<LogoFooter />
				</Col>
				<Col md={4} className='my-auto'>
					<SocialLinks />
				</Col>
			</Row>
		</Container>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Footer;
