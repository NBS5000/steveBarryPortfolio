import './assets/css/App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
import Footer from './components/footer';
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <div id="mainContent">
      <AboutMe />

      <Skills />


      </div>
      <Footer />
    </div>
  );
}

export default App;