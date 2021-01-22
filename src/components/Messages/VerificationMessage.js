//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

//--- Components ---

//--- CSS ---
import '../../styles/components/ErrorMessage.css';
//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function VerificationMessage({ currentVerification }) {
	//--- Effects ---

	//--- JSX ---
	return (
		<Container fluid className='success-message sticky'>
			<Alert variant='success'>{currentVerification}</Alert>
		</Container>
	);
}

export default VerificationMessage;
