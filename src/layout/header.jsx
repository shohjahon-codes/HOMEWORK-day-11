import React from 'react';

const Navbar = () => {
  return (
   <div className="container">
     <nav className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-8">
        <span className="text-xl font-bold text-gray-900">Dribbble</span>
        <a href="#" className="text-gray-600 hover:text-gray-900">Inspiration</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Find Work</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Learn Design</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Go Pro</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Hire Designers</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">Sign in</button>
        <button className="px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600">Sign up</button>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;

