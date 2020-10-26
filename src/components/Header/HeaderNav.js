//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Navbar from 'react-bootstrap/Navbar';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const HeaderNav = () => {
    //--- JSX ---
    return (
        <Navbar>
            <Navbar.Brand>Bug Hunter</Navbar.Brand>
        </Navbar>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default HeaderNav;