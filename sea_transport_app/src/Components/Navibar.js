import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Profile from '../Pages/Profile';

const Navibar = () => {
    return(
    <>
        <Navbar collapseOnSelect expands="lg" bg="dark" variant="dark">
            <Navbar.Brand>Effective Transit</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About us</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" href="/profile">Profile</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} /> 
                <Route path="/profile" component={Profile} /> 
            </Switch>
        </Router>
    </>
    )
}

export default Navibar;
