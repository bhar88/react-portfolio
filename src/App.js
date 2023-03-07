// import { HashRouter } from 'react-router-dom'
import './App.css';
// import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
function App() {
  return (
    <Wrapper >
    <Navbar />
    <Intro />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
    <Footer />
    </Wrapper>
    // {/* // <div className="App">
    // //   <header className="App-header">
    // //     <img src={logo} className="App-logo" alt="logo" />
    // //     <p>
    // //       Edit <code>src/App.js</code> and save to reload.
    // //     </p>
    // //     <a
    // //       className="App-link"
    // //       href="https://reactjs.org"
    // //       target="_blank"
    // //       rel="noopener noreferrer"
    // //     >
    // //       go away
    // //     </a>
    // //   </header>
    // // </div> */}
   
  );
}

export default App;
