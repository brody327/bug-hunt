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
import facebook from '../../images/icons/social/facebook.png'
import twitter from '../../images/icons/social/twitter.png'
import github from '../../images/icons/social/github.png'
import linkedin from '../../images/icons/social/linkedin.png'
//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const SocialLinks = () => {
    //--- JSX ---
    return (
        <Col id='social-links'>
            <h3>Subscribe to Newsletter</h3>
            <p>newslettter description</p>
            <p>email address field to submit</p>
            <h4>Social Links</h4>
            <Container>
                <Row>
                    <Image className='social-icon' src={facebook} />
                    <Image className='social-icon' src={twitter} />
                    <Image className='social-icon' src={linkedin} />
                    <Image className='social-icon' src={github} />
                </Row>
            </Container>
            <div id='icon-attr'>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Col>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default SocialLinks;