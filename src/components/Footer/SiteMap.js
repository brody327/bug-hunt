//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//--- Components ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const SiteMap = () => {
	//--- JSX ---
	return (
		<Col id='site-map'>
			<h3>Site Map</h3>
			<Container>
				<Row>
					<Col>
						<p>Home</p>
						<p>Login</p>
						<p>Register</p>
						<p>Account</p>
					</Col>
					<Col>
						<p>My Projects</p>
						<p>My Bugs</p>
					</Col>
				</Row>
			</Container>
		</Col>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default SiteMap;
