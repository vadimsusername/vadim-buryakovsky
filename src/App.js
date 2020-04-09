import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Hello From App.js</h1>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
