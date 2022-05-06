import './assets/css/App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
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


      </div>
      <Buffer />
      <Footer />
    </div>
  );
}

export default App;