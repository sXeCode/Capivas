import React from 'react';
import './App.css';
import Merchandise from './Merchandise';
import Eventos from './Eventos';  
import Header from './Header';
import About from './About';
import Show from './Show';
import Music from './Music';
import Social from './Social';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Eventos />
        <Show />
        <Music />
        <Merchandise />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

