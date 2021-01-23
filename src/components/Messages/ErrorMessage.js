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
function ErrorMessage({ currentError, setCurrentError }) {
	//--- Effects ---

	//--- Functions ---
	const hideAlert = () => {
		setCurrentError(null);
	};

	//--- JSX ---
	return (
		<Container fluid className='error-message sticky'>
			<Alert variant='danger' className='text-center'>
				{currentError}
				<button
					type='button'
					className='close'
					aria-label='Close'
					onClick={() => hideAlert()}
				>
					<span aria-hidden='true'>&times;</span>
				</button>
			</Alert>
		</Container>
	);
}

export default ErrorMessage;
