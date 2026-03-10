import React from 'react'
import {useState,useCallback} from 'react';
import gsap from "gsap";
import Loader from '../components/Loader.jsx';
import Navbar from '../components/Navbar.jsx';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Experience from '../sections/Experience.jsx';
import Projects from '../sections/Projects.jsx';
const Index = () => {
    const [loading,setLoading] = useState(true);
    const handleLoaderComplete=useCallback(()=> setLoading(false),[]);
    if(loading) return <Loader onComplete={handleLoaderComplete} />;
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
      <h1>Welcome to the portfolio</h1>
    </>
  )
}

export default Index
