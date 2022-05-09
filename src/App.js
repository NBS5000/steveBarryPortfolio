import './assets/css/App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
import Code from './components/code';
import Personal from './components/personal';
import Buffer from './components/buffer';
import Footer from './components/footer';
import React from 'react';

function App() {
  return (
    <div id="app">
      <Header />
      <div id="mainContent">
        <AboutMe />

        <Skills />

        <Code />
        <Personal />

      </div>
      <Buffer />
      <Footer />
    </div>
  );
}

export default App;