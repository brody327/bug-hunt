//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//--- API ---
import { createBug } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function NewBugForm({
	userProjects,
	setUserProjects,
	userBugs,
	setUserBugs,
	currentUser,
	match,
	location,
}) {
	//--- State ---
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [priority, setPriority] = useState('Minimal');

	const project = location.state.project;
	console.log(project, currentUser);

	const history = useHistory();

	//--- Functions ---

	const handleSubmit = async (e) => {
		e.preventDefault();

		//TODO: check for valid entry

		try {
			//Create new bug.
			const bug = await createBug({
				title: name,
				description,
				priority,
				project_id: project._id,
				creator: { _id: currentUser._id, username: currentUser.username },
			});

			console.log(userBugs);
			console.log(bug);

			//Add bug to user Bugs
			setUserBugs([...userBugs, bug.bug]);

			console.log(userBugs);

			//Add bug to project bugs
			const currentProject = userProjects.filter(
				(userProject) => project._id === userProject._id
			);

			currentProject[0].bugs.push(bug._id);

			//Clear fields
			setName('');
			setDescription('');
			setPriority('Minimal');

			//TODO: Send Confirmation message

			//TODO: go to projects
			history.push('/projects');
		} catch (err) {
			console.error(err);
			alert(`Uh Oh! An error occurred: \n ${err}`);
		}
	};

	const handleNameChange = (e) => {
		e.preventDefault();

		setName(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		e.preventDefault();

		setDescription(e.target.value);
	};

	const handlePriorityChange = (e) => {
		e.preventDefault();

		setPriority(e.target.value);
	};

	//--- JSX ---
	return (
		<Container fluid id='new-bug-form'>
			<Form onSubmit={handleSubmit}>
				<h2 className='text-center'>New Bug for: {project.title}</h2>
				<Form.Group controlId='basicName'>
					<Form.Label>Bug Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter bug name'
						value={name}
						onChange={handleNameChange}
						required
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='basicDescription'>
					<Form.Label>Bug Description</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter bug description'
						value={description}
						onChange={handleDescriptionChange}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='basicPriority'>
					<Form.Label>Bug Priority</Form.Label>
					<Form.Control
						as='select'
						value={priority}
						onChange={handlePriorityChange}
					>
						<option>Minimal</option>
						<option>Low</option>
						<option>Medium</option>
						<option>High</option>
						<option>Severe</option>
					</Form.Control>
				</Form.Group>
				<Button type='submit'>Create Bug</Button>
				<Link
					to={{
						pathname: `/projects/${project._id}`,
						state: {
							project,
						},
					}}
				>
					<Button>Cancel</Button>
				</Link>
			</Form>
		</Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default NewBugForm;
