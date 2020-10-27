//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//--- Components ---
import { SocialLinks, TermsOfUse, SiteMap, Contact, LegalDocs } from './index';

//--- CSS ---
import '../../styles/components/Footer.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const Footer = () => {
    //--- JSX ---
    return (
        <Container id='footer' className='background-neutral' fluid>
            <Row>
                <SocialLinks />
                <TermsOfUse />
                <SiteMap />
            </Row>
            <Row>
                <Contact />
            </Row>
            <Row>
                <LegalDocs />
            </Row>
        </Container>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Footer;