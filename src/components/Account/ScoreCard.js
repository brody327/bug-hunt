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
function ScoreCard() {
	//--- JSX ---
	return (
		<Card className='card-corner-color-primary rounded hover-parent background-secondary full-width text-center'>
			<Card.Body>
				<Card.Title as='h2'>Hunter Score</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default ScoreCard;
