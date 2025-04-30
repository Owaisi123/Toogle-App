import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-around items-center bg-black text-white py-6'>
      <h1 className='text-3xl font-bold'>Owais</h1>
      <ul className='flex gap-10 cursor-pointer'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className='bg-slate-300 px-4 py-2 rounded-sm text-black'>
        Sign Up
      </button>
    </div>
  );
};

export default Header;
