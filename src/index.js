import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './pages/Home';

ReactDOM.render(
  <>
    <Router>
      <Route path="/" component={Home}/>
    </Router>
  </>,
  document.getElementById('main')
);