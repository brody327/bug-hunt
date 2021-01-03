//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//--- API ---
import { createProject } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function NewProjectForm({ currentUser, userProjects, setUserProjects }) {
	//--- State ---
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const history = useHistory();

	//--- Functions ---
	const handleSubmit = async (e) => {
		e.preventDefault();

		//TODO: check for valid entry

		//Send project data to api
		try {
			const project = await createProject({
				title: name,
				creator: currentUser._id,
				description,
			});
			//Add new project object to user projects
			setUserProjects([...userProjects, project]);

			//Clear fields
			setName('');
			setDescription('');

			//TODO: Send Confirmation message

			//Go to projects
			history.push('/projects');

			//TODO: refresh page
			window.location.reload();
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
