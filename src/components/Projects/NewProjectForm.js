//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function NewProjectForm() {
	//--- State ---
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	//--- Functions ---
	const handleSubmit = (e) => {
		e.preventDefault();

		//TODO: check for valid entry

		//TODO: send project data to api

		//TODO: Add new project object to user projects

		//TODO: Send Confirmation message

		//TODO: Clear fields?

		//TODO: go to projects
	};

	const handleNameChange = (e) => {
		e.preventDefault();

		setName(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		e.preventDefault();

		setDescription(e.target.value);
	};

	//--- JSX ---
	return (
		<Container fluid id='new-project-form'>
			<Form onSubmit={handleSubmit}>
				<h2 className='text-center'>New Project</h2>
				<Form.Group controlId='basicName'>
					<Form.Label>Project Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter project name'
						value={name}
						onChange={handleNameChange}
						required
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='basicDescription'>
					<Form.Label>Project Description</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter project description'
						value={description}
						onChange={handleDescriptionChange}
						required
					></Form.Control>
				</Form.Group>
				{/* <Form.Group controlId='basicContributors'>
					<Form.Label>Project Description</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter project description'
						value='none'
						onChange='none'
						required
					></Form.Control>
				</Form.Group> */}
				<Button type='submit'>Create Project</Button>
				<Link to='/projects'>
					<Button>Cancel</Button>
				</Link>
			</Form>
		</Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default NewProjectForm;
