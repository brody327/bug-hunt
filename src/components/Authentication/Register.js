//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//--- Components ---

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Register() {
	//--- JSX ---
	return (
		<Container id='register-container'>
			<Form>
				<Form.Label>Register</Form.Label>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label htmlFor='registerEmail'>
						Email address
					</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						id='registerEmail'
					/>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label htmlFor='registerPassword'>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						id='registerPassword'
						aria-describedby='passwordHelpBlock'
					/>
					<Form.Text id='passwordHelpBlock' className='text-muted'>
						Your password must be 8-20 characters long, contain
						letters and numbers, and must not contain spaces,
						special characters, or emoji.
					</Form.Text>
				</Form.Group>
				<Button type='submit'>Submit</Button>
			</Form>
		</Container>
	);
}

export default Register;
