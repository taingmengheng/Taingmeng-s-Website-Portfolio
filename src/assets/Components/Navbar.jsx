import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Navbar = ({ scrollToSection, currentSection }) => {

  // const { t } = useTranslation();

  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("en"); // state variable for the current language

  // function to handle language change
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // change the language
    setLanguage(lang); // update the state
  };  

  const StyledHeaderButton = ({ title, onClick }) => {
    // const { t } = useTranslation();
  
    return (
      <button 
      className={`font-medium text-md ${
        title === currentSection ? 'text-yellow' : 'hover:text-yellow'
      }`}
      onClick={onClick}
    >
      <p>{t(title)}</p>
    </button>
    );
  };


  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <p className="font-semibold text-xl">Taingmeng.dev</p>
        <div className="flex gap-7 align-middle">
          <StyledHeaderButton title="home" onClick={() => scrollToSection('home')}/>
          <StyledHeaderButton title="projects" onClick={() => scrollToSection('projects')}/>
          <StyledHeaderButton title="resume" onClick={() => scrollToSection('resume')}/>
          <StyledHeaderButton title="contact" onClick={() => scrollToSection('contact')}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar