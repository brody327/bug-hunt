//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//--- Components ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const LegalDocs = () => {
    //--- JSX ---
    return (
        <Col id='legal-docs'>
            <h3>Legal Docs</h3>
            <Row>
                <p>link to privacy policy</p>
                <p>copyright [year]</p>
            </Row>
        </Col>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default LegalDocs;