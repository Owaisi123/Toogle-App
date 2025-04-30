import React , {useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext';


const Footer = () => {
    const { theme } = useContext(ThemeContext);
  
  return (
    <footer className={`${theme == 'light' ? 'bg-white text-black' : 'bg-black text-white'} px-6 py-12 mt-24`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold">Owais</h2>

        <ul className={`${theme == 'light' ? 'text-black' : 'text-white'} flex flex-col md:flex-row gap-4 text-sm md:text-base`}>
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Owais. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
