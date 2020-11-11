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
import '../../styles/components/Authentication.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Login() {
	//--- JSX ---
	return (
		<Container id='login-container' className='authentication-container'>
			<Form>
				<h2 className='text-center'>Login</h2>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label htmlFor='loginEmail'>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						id='loginEmail'
					/>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label htmlFor='loginPassword'>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						id='loginPassword'
						aria-describedby='loginasswordHelpBlock'
					/>
					<Form.Text className='text-muted'>
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

export default Login;
