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
import { ErrorMessage } from '../Messages';

//--- CSS ---
import '../../styles/components/Authentication.css';

//--- API ---
import { loginUser } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function LoginValidated({
	setCurrentUser,
	setCurrentError,
	currentError,
	setLoading,
	loadingWait,
}) {
	let history = useHistory();

	//--- JSX ---
	return (
		<Container id='login-container' className='authentication-container'>
			{currentError ? <ErrorMessage currentError={currentError} /> : null}
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						setLoading(true);
						const user = await loginUser({
							email: values.email.toLowerCase(),
							password: values.password,
						});

						setCurrentError(null);

						//Update current user state.
						setCurrentUser(user.user);

						//Store user information for persistent login.
						localStorage.clear();
						localStorage.setItem('userId', user.user._id);
						localStorage.setItem('token', user.token);

						//Redirect to Login Page.
						history.push('/');
					} catch (err) {
						setCurrentError(err.data);
						// alert(`Uh Oh! An error occurred: \n${err.data}`);
					}
					setTimeout(() => setLoading(false), 1000);
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email('Invalid email address.')
						.required('Invalid email address.'),
					password: Yup.string()
						.required('Invalid password.')
						.min(8, 'Invalid password.')
						.matches(
							/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
							'Invalid password.'
						),
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
							<h1 className='text-center'>Login</h1>
							<Form.Group controlId='formBasicEmail'>
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									type='text'
									name='email'
									placeholder='Enter email'
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
							</Form.Group>
							<Form.Group controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									name='password'
									placeholder='Password'
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
}

export default LoginValidated;
