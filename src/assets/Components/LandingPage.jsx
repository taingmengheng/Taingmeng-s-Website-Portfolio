import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects'

const LandingPage = () => {

   // Function to handle smooth scrolling
   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };

  const [currentSection, setCurrentSection] = useState('home');

    // Function to handle scroll event
  const handleScroll = () => {
    const homeSection = document.getElementById('home');
    const resumeSection = document.getElementById('resume');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition < resumeSection.offsetTop) {
      setCurrentSection('home');
    } else if (scrollPosition >= resumeSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
      setCurrentSection('resume');
    } else if (scrollPosition >= projectsSection.offsetTop && scrollPosition < contactSection.offsetTop) {
      setCurrentSection('projects');
    } else if (scrollPosition >= contactSection.offsetTop) {
      setCurrentSection('contact');
    }
  };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      console.log('Current section:', currentSection);
    }, [currentSection]);  

  return (
    <div className='max-w-5xl mx-auto'>
      <Navbar scrollToSection={scrollToSection} currentSection={currentSection}/>
      <div className='px-4'>
        <div id='home'>
          <HomePage />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='resume'>
          <Resume />
        </div>
        <div id='contact'>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
