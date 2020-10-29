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
const LegalDocs = () => {
	//--- JSX ---
	return (
		<Container id='legal-docs'>
			<Row className='justify-content-md-center'>
				<h1> &#169;2020</h1>
				<h1>
					<strong>BUG HUNTER</strong>
				</h1>
			</Row>
		</Container>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default LegalDocs;
