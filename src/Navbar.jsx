import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-blue-600 p-4 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-white text-lg font-semibold'>Shipping Boxes</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-white md:hidden'
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className='hidden md:flex space-x-4'>
          <Link to='/' className='text-white hover:underline'>
            Add Box
          </Link>
          <Link to='/list' className='text-white hover:underline'>
            Box List
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-blue-700 p-4'>
          <Link
            to='/'
            className='block text-white py-2'
            onClick={() => setIsOpen(false)}
          >
            Add Box
          </Link>
          <Link
            to='/list'
            className='block text-white py-2'
            onClick={() => setIsOpen(false)}
          >
            Box List
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
