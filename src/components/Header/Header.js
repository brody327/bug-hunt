//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//--- Components ---
import { HeaderNav } from './index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const Header = () => {
    //--- JSX ---
    return (
        <Container id='header'>
            <Row>
                <Col>LOGO IMG</Col>
                <Col>
                    <h1>Bug Hunter</h1>
                </Col>
                <Col>
                    <h3>LOGIN/LOGOUT/REGISTER</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <HeaderNav />
                </Col>
            </Row>
        </Container>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Header;