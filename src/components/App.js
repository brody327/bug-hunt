//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';

//--- Components ---
import { Header } from './Header/index'
import { Content } from './Content/index'
import { Footer } from './Footer/index'

//--- CSS ---
import './App.css'


//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const App = () => {
    //--- JSX ---
    return (
        <Container fluid id='app'>
            <Header />
            <Content />
            <Footer />
        </Container>
    );
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default App;