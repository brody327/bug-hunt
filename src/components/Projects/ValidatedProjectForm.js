//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

//--- Components ---
import { ErrorMessage } from '../Messages';

//--- API ---
import { createProject } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function NewProjectForm({
	currentUser,
	userProjects,
	setUserProjects,
	currentError,
	setCurrentError,
	setLoading,
	loadingWait,
}) {
	//--- State ---
	const history = useHistory();

	//--- JSX ---
	return (
		<Container fluid id='new-project-form'>
			{currentError ? <ErrorMessage currentError={currentError} /> : null}
			<Formik
				initialValues={{
					title: '',
					description: '',
				}}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						setLoading(true);
						const project = await createProject({
							title: values.title,
							creator: { _id: currentUser._id, username: currentUser.username },
							description: values.description,
						});
						//Add new project object to user projects
						setUserProjects([...userProjects, project]);

						//TODO: Send Confirmation message

						//Go to projects
						history.push('/projects');

						//Refresh page
						window.location.reload();
					} catch (err) {
						console.error(err);
						setCurrentError(err.data);
						alert(`Uh Oh! An error occurred: \n ${err.data}`);
					}
					setTimeout(() => setLoading(false), 1000);
				}}
				validationSchema={Yup.object().shape({
					title: Yup.string().required('This field is required.'),
					description: Yup.string(),
				})}
			>
				{({
					values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => {
					return (
						<Form onSubmit={handleSubmit}>
							<h1 className='text-center'>New Project</h1>
							<Form.Group controlId='basicName'>
								<Form.Label>Project Name</Form.Label>
								<Form.Control
									type='text'
									name='title'
									placeholder='Enter project name'
									value={values.title}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.title && touched.title ? 'error' : null}
								></Form.Control>
								{errors.title && touched.title ? (
									<Alert className='input-feedback' variant='danger'>
										{errors.title}
									</Alert>
								) : null}
							</Form.Group>
							<Form.Group controlId='basicDescription'>
								<Form.Label>Project Description</Form.Label>
								<Form.Control
									type='text'
									name='description'
									placeholder='Enter project description'
									value={values.description}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.description && touched.description ? 'error' : null
									}
								></Form.Control>
								{errors.description && touched.description ? (
									<Alert className='input-feedback' variant='danger'>
										{errors.description}
									</Alert>
								) : null}
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
							<Button type='submit' disabled={isSubmitting}>
								Create Project
							</Button>
							<Link to='/projects'>
								<Button>Cancel</Button>
							</Link>
						</Form>
					);
				}}
			</Formik>
		</Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default NewProjectForm;
