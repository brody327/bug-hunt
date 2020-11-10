//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//--- Components ---
import { BugCard } from './index';

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AllBugs({ userBugs }) {
	//--- JSX ---
	return (
		<Container fluid>
			<Row>
				{userBugs !== undefined
					? userBugs.map((bug) => <BugCard bug={bug} />)
					: ''}
			</Row>
		</Container>
	);
}

export default AllBugs;
