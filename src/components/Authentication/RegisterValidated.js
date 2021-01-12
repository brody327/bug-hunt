//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

//--- Components ---
import { ErrorMessage } from '../Error';

//--- CSS ---
import '../../styles/components/Authentication.css';
import '../../styles/forms.css';

//--- API ---
import { createUser } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
//Create history object.
const RegisterValidated = ({ setCurrentError, currentError }) => {
	const history = useHistory();
	return (
		<Container id='register-container' className='authentication-container'>
			{currentError ? <ErrorMessage currentError={currentError} /> : null}
			<Formik
				initialValues={{
					username: '',
					email: '',
					password: '',
					confirm: '',
				}}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						const user = await createUser({
							username: values.username,
							email: values.email.toLowerCase(),
							password: values.password,
						});

						//TODO: Send confirmation message?
						setCurrentError(null);
						//Redirect to Login Page.
						history.push('/login');
					} catch (err) {
						setCurrentError(err.data);
						alert(`Uh Oh! An error occurred: \n${err.data}`);
					}
				}}
				//With Yup library
				validationSchema={Yup.object().shape({
					username: Yup.string()
						.required('This field is required.')
						.min(
							6,
							'Invalid username. Username must be between 6 and 16 characters.'
						)
						.max(
							16,
							'Invalid username. Username must be between 6 and 16 characters.'
						)
						.matches(
							/^[a-zA-Z0-9]+$/,
							'Invalid username. Must contain only letters and numbers.'
						),
					email: Yup.string()
						.email('Invalid email address.')
						.required('This field is required.'),
					password: Yup.string()
						.required('This field is required.')
						.min(8, 'Password must contain a minimum of eight characters.')
						.matches(
							/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
							'Password must contain at least one letter, one number and one special character.'
						),
					confirm: Yup.string()
						.required('This field is required.')
						.oneOf(
							[Yup.ref('password')],
							'Invalid password. You must confirm your same password from above.'
						),
				})}

				//Without Yup library
				// validate={(values) => {
				// 	let errors = {};

				// 	if (!values.email) {
				// 		errors.email = 'This field is required.';
				// 	} else if (
				// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				// 	) {
				// 		errors.email = 'Invalid email address.';
				// 	}

				// 	if (!values.username) {
				// 		errors.username = 'This field is required.';
				// 	} else if (values.username.length < 6 || values.username.length > 16) {
				// 		errors.username = 'Username must be between 6 and 16 characters.';
				// 	} else if (!/^[a-zA-Z0-9]+$/.test(values.username)) {
				// 		errors.username =
				// 			'Invalid username. Must contain only letters and numbers.';
				// 	}

				// 	if (!values.password) {
				// 		errors.password = 'This field is required.';
				// 	} else if (values.password.length < 8 || values.password.length > 20) {
				// 		errors.password = 'Password must be between 8 and 20 characters.';
				// 	} else if (
				// 		//Minimum eight characters, at least one letter, one number and one special character:
				// 		!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
				// 			values.password
				// 		)
				// 	) {
				// 		errors.password =
				// 			'Password must contain a minimum of eight characters, at least one letter, one number and one special character.';
				// 	}

				// 	if (!values.confirm) {
				// 		errors.password = 'This field is required.';
				// 	} else if (values.password !== values.confirm) {
				// 		errors.confirm =
				// 			'Invalid password. You must confirm your same password from above.';
				// 	}
				// 	return errors;
				// }}
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
							<h2 className='text-center'>Register</h2>
							<Form.Group controlId='formBasicUsername'>
								<Form.Label>Username</Form.Label>
								<Form.Control
									type='text'
									name='username'
									placeholder='Enter username'
									aria-describedby='usernameHelp'
									value={values.username}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.username && touched.username ? 'error' : null
									}
								/>
								{errors.username && touched.username ? (
									<Alert className='input-feedback' variant='danger'>
										{errors.username}
									</Alert>
								) : null}
								{!errors.username && touched.username ? (
									<Alert className='input-feedback' variant='success'>
										Looks good!
									</Alert>
								) : null}
								<Form.Text id='usernameHelp' className='text-muted'>
									Create a username. Your username must be between 6 and 16
									characters long. You username can only contain letters or
									numbers. Other users WILL see this.
								</Form.Text>
							</Form.Group>
							<Form.Group controlId='formBasicEmail'>
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									type='text'
									name='email'
									placeholder='Enter email'
									aria-describedby='emailHelp'
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.email && touched.email ? 'error' : null}
								/>
								{errors.email && touched.email ? (
									<Alert className='input-feedback' variant='danger'>
										{errors.email}
									</Alert>
								) : null}
								{!errors.email && touched.email ? (
									<Alert className='input-feedback' variant='success'>
										Looks good!
									</Alert>
								) : null}
								<Form.Text id='emailHelp' className='text-muted'>
									Enter a valid email. This is used to login. Other users will
									NOT see this.
								</Form.Text>
							</Form.Group>
							<Form.Group controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='text'
									name='password'
									placeholder='Password'
									aria-describedby='passwordHelp'
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.password && touched.password ? 'error' : null
									}
								/>
								{errors.password && touched.password ? (
									<Alert className='input-feedback' variant='danger'>
										{errors.password}
									</Alert>
								) : null}
								{!errors.password && touched.password ? (
									<Alert className='input-feedback' variant='success'>
										Looks good!
									</Alert>
								) : null}
								<Form.Text id='passwordHelp' className='text-muted'>
									Your password must be a minimum of eight characters, have at
									least one letter, one number and one special character.
								</Form.Text>
							</Form.Group>
							<Form.Group controlId='formBasicConfirmPassword'>
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									type='text'
									name='confirm'
									placeholder='Re-type Password'
									aria-describedby='confirmPasswordHelp'
									value={values.confirm}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.confirm && touched.confirm ? 'error' : null}
								/>
								{errors.confirm && touched.confirm ? (
									<Alert className='input-feedback' variant='danger'>
										{errors.confirm}
									</Alert>
								) : null}
								{!errors.confirm && touched.confirm ? (
									<Alert className='input-feedback' variant='success'>
										Looks good!
									</Alert>
								) : null}
								<Form.Text id='confirmPasswordHelp' className='text-muted'>
									Re-enter the password you typed in the password field above.
								</Form.Text>
							</Form.Group>
							<Button type='submit' disabled={isSubmitting}>
								Submit
							</Button>
						</Form>
					);
				}}
			</Formik>
		</Container>
	);
};

export default RegisterValidated;
