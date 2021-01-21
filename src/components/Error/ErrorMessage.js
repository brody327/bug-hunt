//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//--- Components ---

//--- CSS ---
import '../../styles/components/ErrorMessage.css';
//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function ErrorMessage({ currentError }) {
	//--- Effects ---

	//--- JSX ---
	return (
		<Container fluid className='error-message sticky'>
			<Alert variant='danger'>{currentError}</Alert>
		</Container>
	);
}

export default ErrorMessage;
