//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//--- Components ---

//--- CSS ---
import '../../styles/components/Authentication.css';

//--- API Imports ---
import { loginUser } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Login({ currentUser, setCurrentUser }) {
	//--- State ---
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let history = useHistory();

	//--- Functions ---
	//Handles registering user after pressing submit.
	const handleSubmit = async (event) => {
		event.preventDefault();

		//TODO: Check for valid entry.

		try {
			const user = await loginUser({
				email: email.toLowerCase(),
				password,
			});

			//TODO: Send confirmation message?

			setEmail('');
			setPassword('');

			//Update current user state.
			setCurrentUser(user);

			history.push('/');
		} catch (err) {
			console.error(err);
			alert(`Uh Oh! An error occurred: \n ${err}`);
		}
	};

	//User input field handlers
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	//--- JSX ---
	return (
		<Container id='login-container' className='authentication-container'>
			<Form onSubmit={handleSubmit}>
				<h2 className='text-center'>Login</h2>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={handleEmailChange}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						value={password}
						onChange={handlePasswordChange}
					/>
				</Form.Group>
				<Button type='submit'>Submit</Button>
			</Form>
		</Container>
	);
}

export default Login;
