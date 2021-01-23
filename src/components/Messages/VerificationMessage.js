//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState } from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

//--- Components ---

//--- CSS ---
import '../../styles/components/ErrorMessage.css';
//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function VerificationMessage({ currentVerification, setCurrentVerification }) {
	//--- Effects ---

	//--- Functions ---
	const hideAlert = () => {
		setCurrentVerification(null);
	};

	//--- JSX ---
	return (
		<Container fluid className='success-message sticky'>
			<Alert variant='success' className='text-center'>
				{currentVerification}
			</Alert>
			<button
				type='button'
				className='close'
				aria-label='Close'
				onClick={() => hideAlert()}
			>
				<span aria-hidden='true'>&times;</span>
			</button>
		</Container>
	);
}

export default VerificationMessage;
