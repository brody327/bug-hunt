//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Card from 'react-bootstrap/Card';

//--- Components ---

//--- CSS ---
import '../../styles/hover-card.css';

//--- Media ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AllBugsCard() {
	//--- JSX ---
	return (
		<Card className='bugs-card card-corner-color-primary rounded hover-parent background-secondary '>
			<Card.Body>
				<Card.Title as='h2'>All Bugs</Card.Title>
				<Card.Text className='hover-child fade-in-full' as='h4'>
					View all your submitted bugs.
				</Card.Text>
			</Card.Body>
		</Card>

		// <Container className='bugs-card rounded background-primary' fluid >
		//     <h2>All Bugs</h2>
		// </Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default AllBugsCard;
