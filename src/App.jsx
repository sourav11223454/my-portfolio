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
import { useEffect, useState } from 'react';
import Loader from './components/Loader'
import { AnimatePresence } from "framer-motion";


function App() {

  const [loading,setLoading]=useState(true)

     useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true 
    });
  }, []);

  return (
   <>
      {/* Loader */}
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onFinish={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main App */}
      {!loading && (
        <>
          <div style={{ overflowX: "hidden" }}>
            <Navbar />
            <Home />
            <Journey />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </>
  )
}

export default App
