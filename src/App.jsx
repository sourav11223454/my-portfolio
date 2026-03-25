import './App.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Home from './components/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true 
    });
  }, []);

  return (
    <>
    <Navbar />
    <Home />
    <Journey />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
