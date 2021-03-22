import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import { Home } from './Pages/Home';
//import { About } from './Pages/About';

function App() {
  return (
  <>
    <Router>
      <NaviBar />
      <Footer />
    </Router>
  </>
  );
}

export default App;