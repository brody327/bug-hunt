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
import { createUser } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Register() {
	//--- State ---
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');

	let history = useHistory();

	//--- Functions ---
	//Handles registering user after pressing submit.
	const handleSubmit = async (event) => {
		event.preventDefault();

		//Check if password and password confirmation are the same.
		if (password !== confirm) {
			//TODO: Create error message system!
			alert('The password and password confirmation do not match!');
			return;
		}

		//TODO: Check for valid entry.

		try {
			const user = await createUser({
				username,
				email: email.toLowerCase(),
				password,
			});

			//TODO: Send confirmation message?

			//Reset register fields.
			setUsername('');
			setEmail('');
			setPassword('');
			setConfirm('');

			//Redirect to Login Page.
			history.push('/login');
		} catch (err) {
			console.error(err);
			alert('Uh Oh! An error occurred: \n', err);
		}
	};

	//User input field handlers.
	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleConfirmChange = (event) => {
		setConfirm(event.target.value);
	};

	//--- JSX ---
	return (
		<Container id='register-container' className='authentication-container'>
			<Form onSubmit={handleSubmit}>
				<h2 className='text-center'>Register</h2>
				<Form.Group controlId='formBasicUsername'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='username'
						placeholder='Enter username'
						aria-describedby='usernameHelp'
						value={username}
						onChange={handleUsernameChange}
						minLength='6'
						maxLength='16'
						required
					/>
					<Form.Text id='usernameHelp' className='text-muted'>
						Create a username. Your username must be between 6 and 16 characters
						long. You username can only contain letters or numbers. Other users
						WILL see this.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						aria-describedby='emailHelp'
						value={email}
						onChange={handleEmailChange}
						required
					/>
					<Form.Text id='emailHelp' className='text-muted'>
						Enter a valid email. This is used to login. Other users will NOT see
						this.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						aria-describedby='passwordHelp'
						value={password}
						onChange={handlePasswordChange}
						minLength='8'
						maxLength='20'
						required
					/>
					<Form.Text id='passwordHelp' className='text-muted'>
						Your password must be 8-20 characters long, contain letters and
						numbers, and must not contain spaces, special characters, or emoji.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='formBasicConfirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Re-type Password'
						aria-describedby='confirmPasswordHelp'
						value={confirm}
						onChange={handleConfirmChange}
						required
					/>
					<Form.Text id='confirmPasswordHelp' className='text-muted'>
						Re-enter the password you typed in the password field above.
					</Form.Text>
				</Form.Group>
				<Button type='submit'>Submit</Button>
			</Form>
		</Container>
	);
}

export default Register;
