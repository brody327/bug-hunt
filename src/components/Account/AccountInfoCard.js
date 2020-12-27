//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//--- Components ---

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AccountInfoCard({ username, email, company }) {
	//--- JSX ---
	return (
		<Card
			id='account-info-card'
			className='card-corner-color-primary rounded hover-parent background-secondary full-width text-center'
		>
			<Card.Body>
				<Card.Title as='h2'>Account Information</Card.Title>
				<div className='divider'></div>
				<Container fluid>
					<Row>
						<Col>
							<h3>Username:</h3>
							<p>{username}</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<h3>Email:</h3>
							<p>{email}</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<h3>Company:</h3>
							<p>{company}</p>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
}

export default AccountInfoCard;
