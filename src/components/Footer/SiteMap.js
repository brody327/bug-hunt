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
const SiteMap = () => {
    //--- JSX ---
    return (
        <Col id='site-map'>
            <h3>Site Map</h3>
            <Container>
                <Row>
                    <Col>
                        <p>Nav</p>
                        <p>bar/links</p>
                        <p>going</p>
                        <p>down</p>
                    </Col>
                    <Col>
                        <p>more</p>
                        <p>Nav</p>
                        <p>bar/links</p>
                        <p>going</p>
                        <p>down</p>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default SiteMap;