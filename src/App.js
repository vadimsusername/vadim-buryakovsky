import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Four04 from "./components/Four04";

function App() {
  return (
    <div className="container bg3 fill">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route component={Four04}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
