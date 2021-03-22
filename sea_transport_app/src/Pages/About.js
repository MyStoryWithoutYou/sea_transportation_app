import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from '../Components/Navibar';
import Footer from '../Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class About extends Component {
    render(){
        <Router>            
            <NaviBar />
            <Footer />
        </Router>
    }
}