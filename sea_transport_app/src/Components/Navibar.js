import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { About } from '../Pages/About';

export default function Navibar() {
    return(
    <>
        <Navbar collapseOnSelect expands="lg" bg="dark" variant="dark">
            <Navbar.Brand>Sea Transportation Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary">Profile</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} /> 
            </Switch>
        </Router>
    </>
    )
}
