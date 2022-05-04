import './assets/css/App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <div id="mainContent">
      <AboutMe />


      </div>
      <Footer />
    </div>
  );
}

export default App;