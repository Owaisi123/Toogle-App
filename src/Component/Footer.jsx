import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold">Owais</h2>

        <ul className="flex flex-col md:flex-row gap-4 text-gray-300 text-sm md:text-base">
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
