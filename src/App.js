import './assets/css/App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
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

        <Personal />

      </div>
      <Buffer />
      <Footer />
    </div>
  );
}

export default App;