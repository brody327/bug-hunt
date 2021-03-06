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
function EditAccountCard() {
	//--- JSX ---
	return (
		<Card
			id='edit-account-card'
			className='card-corner-color-primary rounded hover-parent background-secondary full-width text-center'
		>
			<Card.Body>
				<Card.Title as='h4'>Edit Account Information</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default EditAccountCard;
