import React from 'react';
import Header from '../src/Header/Header';
import Intro from '../src/Intro/Intro';
import Projects from '../src/Projects/Projects';
import Footer from '../src/Footer/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;