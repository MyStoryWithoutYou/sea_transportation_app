import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Navibar() {
    return (
    <>
        <Navbar collapseOnSelect expands="lg" bg="dark" variant="dark">
            <Navbar.Brand>Sea Transportation Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary">Profile</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} /> 
            </Switch>
        </Router>
    </>
    )
}