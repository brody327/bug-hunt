//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

//--- Components ---

//--- Media ---
import facebook from '../../images/icons/social/facebook.png';
import twitter from '../../images/icons/social/twitter.png';
import github from '../../images/icons/social/github.png';
import linkedin from '../../images/icons/social/linkedin.png';
//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const SocialLinks = () => {
	//--- JSX ---
	return (
		<Container id='social-links'>
			<Container>
				<Row>
					<Col>
						<a
							className='a-none'
							href='http://google.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image className='social-icon' src={facebook} />
						</a>
					</Col>
					<Col>
						<a
							className='a-none'
							href='http://google.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image className='social-icon' src={twitter} />
						</a>
					</Col>
					<Col>
						<a
							className='a-none'
							href='https://www.linkedin.com/in/brody-faust-678372135/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image className='social-icon' src={linkedin} />
						</a>
					</Col>
					<Col>
						<a
							className='a-none'
							href='https://github.com/brody327/defcon-bug-tracker'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image className='social-icon' src={github} />
						</a>
					</Col>
				</Row>
			</Container>
			<div id='icon-attr'>
				Icons made by{' '}
				<a href='https://icon54.com/' title='Pixel perfect'>
					Pixel perfect
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com
				</a>
				.
			</div>
		</Container>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default SocialLinks;
