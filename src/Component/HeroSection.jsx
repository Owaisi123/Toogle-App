import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const HeroSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const paragraphs = [];
  for (let i = 0; i < 6; i++) {
    paragraphs.push(
      <p
        key={i}
        className={`mt-4 text-base md:text-lg ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}
      >
        This is a short description or tagline.
      </p>
    );
  }

  return (
    <div
      className={`${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      } py-16 mt-10 px-4 text-center`}
    >
      <h3 className="text-2xl md:text-4xl font-semibold">
        Welcome to the Hero Section
      </h3>

      {paragraphs}

      <div className="flex justify-center mt-8">
        <button
          className="bg-slate-200 text-black px-4 py-2 rounded-sm m-4 flex items-center justify-center gap-2"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme === 'light' ? (
            <>
              🌙 <span>Make it dark</span>
            </>
          ) : (
            <>
              ☀️ <span>Make it light</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
