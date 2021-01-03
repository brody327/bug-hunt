//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Button from 'react-bootstrap/Button';

//--- Components ---

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function ErrorPage() {
	//--- JSX ---
	return (
		<div>
			<h1>Uh oh!</h1>
			<h2>Looks like there are some bugs in the system...</h2>
			<Link to='/'>
				<Button>Home</Button>
			</Link>
		</div>
	);
}

export default ErrorPage;
