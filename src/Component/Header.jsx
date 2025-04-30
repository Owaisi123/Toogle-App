import React , {useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext';


const Header = () => {
      const { theme } = useContext(ThemeContext);
  
  return (
    <div className={ ` ${theme == 'light' ? 'bg-white text-black' : 'bg-black text-white' } py-6 px-4`}>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <h1 className="text-3xl font-bold">Owais</h1>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <button className="bg-slate-300 px-4 py-2 rounded-sm text-black">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
