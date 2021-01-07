//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState, useEffect } from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//--- Components ---

//--- CSS ---

//--- API ---
import { getBugById } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Bug({ match, location }) {
	//--- State ---
	const [bug, setBug] = useState(null);

	const bugData = location.state.bug;

	//--- Effects ---
	//Set bug to location bug.
	useEffect(() => {
		if (bug === null) {
			getBugById(bugData._id)
				.then((response) => {
					setBug(response.bug);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, []);
	//--- JSX ---
	return (
		<Container fluid>
			{bug === null ? (
				'Sorry we could not find your bug!'
			) : (
				<>
					<h1>{bug.title}</h1>
					<p>ID: {bug._id}</p>
					<p>Name: {bug.title}</p>
					<p>{bug.creator.username}</p>
					<p>{bug.createdAt}</p>
					<p>bug description</p>
					<p>{bug.priority}</p>
					<p>Comments Component</p>
				</>
			)}
		</Container>
	);
}

export default Bug;
