//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
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
import { createBug } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function ValidatedBugForm({
	userProjects,
	setUserProjects,
	userBugs,
	setUserBugs,
	currentUser,
	currentError,
	setCurrentError,
	setLoading,
	loadingWait,
	match,
	location,
}) {
	const project = location.state.project;

	const history = useHistory();

	//--- JSX ---
	return (
		<Container fluid id='new-bug-form'>
			{currentError ? <ErrorMessage currentError={currentError} /> : null}
			<Formik
				initialValues={{
					title: '',
					description: '',
					priority: 'Minimal',
				}}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						setLoading(true);
						//Create new bug.
						const bug = await createBug({
							title: values.title,
							description: values.description,
							priority: values.priority,
							project_id: project._id,
							creator: { _id: currentUser._id, username: currentUser.username },
						});

						//Add bug to user Bugs
						setUserBugs([...userBugs, bug.bug]);

						//Add bug to project bugs
						const projectIndex = userProjects.findIndex(
							(userProject) => project._id === userProject._id
						);
						userProjects[projectIndex].bugs.push({
							_id: bug.bug._id,
							name: bug.bug.title,
						});
						setUserProjects([...userProjects]);

						//Go to projects
						history.push({
							pathname: `/projects/${userProjects[projectIndex]._id}`,
							state: { project: userProjects[projectIndex] },
						});
					} catch (err) {
						console.error(err);
						setCurrentError(err);
					}
					setTimeout(() => setLoading(false), 1000);
				}}
				validationSchema={Yup.object().shape({
					title: Yup.string().required('This field is required.'),
					description: Yup.string(),
					priority: Yup.string().required('This field is required.'),
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
							<h1 className='text-center'>New Bug for: {project.title}</h1>
							<Form.Group controlId='basicName'>
								<Form.Label>Bug Name</Form.Label>
								<Form.Control
									type='text'
									name='title'
									placeholder='Enter bug name'
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
								<Form.Label>Bug Description</Form.Label>
								<Form.Control
									type='text'
									name='description'
									placeholder='Enter bug description'
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
							<Form.Group controlId='basicPriority'>
								<Form.Label>Bug Priority</Form.Label>
								<Form.Control
									as='select'
									name='priority'
									value={values.priority}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.priority && touched.priority ? 'error' : null
									}
								>
									<option>Minimal</option>
									<option>Low</option>
									<option>Medium</option>
									<option>High</option>
									<option>Severe</option>
								</Form.Control>
							</Form.Group>
							<Button type='submit' disabled={isSubmitting}>
								Create Bug
							</Button>
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
					);
				}}
			</Formik>
		</Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default ValidatedBugForm;
