import React from 'react';
import './index.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ThemeContextProvider from './Context/ThemeContext';
import HeroSection from './Component/HeroSection';


const App = () => {
  return (
    
      <ThemeContextProvider>
        <Header />
       <HeroSection/>
      <Footer/>
      </ThemeContextProvider>

    
  );
};

export default App;
