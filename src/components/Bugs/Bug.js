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
import Alert from 'react-bootstrap/Alert';

//--- Components ---

//--- CSS ---

//--- API ---
import { getBugById, getProjectById } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Bug({ match, location }) {
	//--- State ---
	const [bug, setBug] = useState(null);
	const [project, setProject] = useState(null);

	const bugData = location.state.bug;
	const projectData = location.state.project;

	//--- Effects ---
	//Set bug to location bug.
	useEffect(() => {
		let mounted = true;
		if (!bug) {
			getBugById(bugData._id)
				.then((response) => {
					if (mounted) setBug(response.bug);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		return () => (mounted = false);
	}, []);

	//Set project using bug.
	// useEffect(() => {
	// 	let mounted = true;
	// 	if (!projectData && bug) {
	// 		getProjectById(bug.project_id)
	// 			.then((response) => {
	// 				if (mounted) setProject(response.project);
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	} else {
	// 		setProject(projectData);
	// 	}
	// 	return () => (mounted = false);
	// }, [bug]);

	//--- JSX ---
	return (
		<Container fluid>
			{bug === null ? (
				<Alert variant='danger'>Sorry we could not find your bug!</Alert>
			) : (
				<>
					<h1 className='text-center'>{bug.title}</h1>
					<Row>
						<Col>
							<Card>
								<Row>
									<Col>
										<Card.Body>
											<p>ID: {bug._id}</p>
											<p>Name: {bug.title}</p>
											<p>Project: {bug.project.title}</p>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						</Col>
						<Col>
							<Card>
								<Row>
									<Col>
										<Card.Body>
											<p>Creator: {bug.creator.username}</p>
											<p>Created At: {bug.createdAt}</p>
											<p>Last Updated: {bug.updatedAt}</p>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
					<Button>Edit Bug</Button>
					<Button>Delete Bug</Button>
					<Row>
						<Col>
							<Card>
								<Row>
									<Col>
										<p>{bug.description}</p>
										<p>{bug.priority}</p>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<p>Comments Component</p>
							</Card>
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
}

export default Bug;
