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
	const handleSubmit = async (event) => {
		event.preventDefault();

		//Check if password and password confirmation are the same.
		if (password !== confirm) {
			//TODO: Create error message system!
			alert('The password and password confirmation do not match!');
		}

		try {
			const user = await createUser({
				username,
				email,
				password,
			});
			console.log(user);

			//Reset register fields.
			setUsername('');
			setEmail('');
			setPassword('');
			setConfirm('');

			//Redirect to Login Page.
			history.push('/login');
		} catch (err) {
			console.error(err);
			alert('Uh Oh! An error occured: \n', err);
		}
	};

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
					<Form.Label htmlFor='registerUsername'>Username</Form.Label>
					<Form.Control
						type='username'
						placeholder='Enter username'
						id='registerUsername'
						value={username}
						onChange={handleUsernameChange}
						minLength='6'
						maxLength='16'
						required
					/>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label htmlFor='registerEmail'>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						id='registerEmail'
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label htmlFor='registerPassword'>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						id='registerPassword'
						aria-describedby='passwordHelpBlock'
						value={password}
						onChange={handlePasswordChange}
						minLength='8'
						required
					/>
					{/* <Form.Text id='passwordHelpBlock' className='text-muted'>
						Your password must be 8-20 characters long, contain letters and
						numbers, and must not contain spaces, special characters, or emoji.
					</Form.Text> */}
				</Form.Group>
				<Form.Group controlId='formBasicConfirmPassword'>
					<Form.Label htmlFor='registerConfirmPassword'>
						Confirm Password
					</Form.Label>
					<Form.Control
						type='password'
						placeholder='Re-type Password'
						id='registerConfirmPassword'
						value={confirm}
						onChange={handleConfirmChange}
						required
					/>
				</Form.Group>
				<Button type='submit'>Submit</Button>
			</Form>
		</Container>
	);
}

export default Register;
