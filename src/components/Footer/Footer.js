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
import {
	SocialLinks,
	TermsOfUse,
	SiteMap,
	Contact,
	LegalDocs,
	LogoFooter,
} from './index';

//--- Media ---
import logo from '../../images/logo4.png';

//--- CSS ---
import '../../styles/components/Footer.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const Footer = () => {
	//--- JSX ---
	return (
		<Container id='footer' className='background-neutral' fluid>
			{/* Minimal Design */}
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

			{/* InfoDump Design */}
			{/* <Row>
				<Col>
					<SocialLinks />
				</Col>
				<Col>
					<TermsOfUse />
				</Col>
				<Col>
					<SiteMap />
				</Col>
			</Row>
			<Row>
				<Col>
					<Contact />
				</Col>
			</Row>
			<Row>
				<Col>
					<LegalDocs />
				</Col>
			</Row> */}
		</Container>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Footer;
