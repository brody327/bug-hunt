//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

//--- Components ---

//--- CSS ---

//--- Media ---';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function ViewAccountCard() {
	//--- JSX ---
	return (
		<Card className='account-card card-corner-color-primary rounded hover-parent background-secondary '>
			<Card.Body>
				<Card.Title as='h2'>View Account</Card.Title>
				<Card.Text className='hover-child fade-in-full' as='h4'>
					View your account.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default ViewAccountCard;
